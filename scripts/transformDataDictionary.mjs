#! /usr/bin/env node

import frontmatter from 'front-matter';
import * as fs from 'fs/promises';
import { glob } from 'glob10';
import yaml from 'js-yaml';
import _ from 'lodash';
import { mkdirp } from 'mkdirp';

const constructYaml = ({ body, ...attributes }) => {
  let str = '---\n';
  str += yaml.dump(attributes);
  str += '---\n\n';
  str += body;
  return str;
};

const getParentFromPath = (path) => {
  const parts = path.split('/').slice(0, -1);
  return parts[parts.length - 1];
};

const markdownPaths = await glob('src/data-dictionary/events/**/*.md');

const events = new Map();
const attributes = new Map();

const eventPaths = markdownPaths.filter((path) =>
  path.includes('.event-definition')
);
const eventStrs = await Promise.all(
  eventPaths.map((path) =>
    fs.readFile(path, 'utf-8').then((str) => [path, str])
  )
);
eventStrs
  .map(([path, eventStr]) => [path, frontmatter(eventStr)])
  .forEach(([path, { attributes, body }]) =>
    events.set(attributes.name, {
      ...attributes,
      body,
      attributes: new Set(),
      fsPath: path,
    })
  );

let attributePaths = markdownPaths.filter(
  (path) => !path.includes('.event-definition')
);
let attributeStrs = await Promise.all(
  attributePaths.map((path) =>
    fs.readFile(path, 'utf-8').then((str) => [path, str])
  )
);
attributeStrs
  .map(([path, attributeStr]) => [path, frontmatter(attributeStr)])
  .forEach(([path, { attributes: mdAttributes, body }]) =>
    attributes.set(mdAttributes.name, {
      ...mdAttributes,
      body,
      parentEvent: getParentFromPath(path),
      fsPath: path,
    })
  );

for (const [name, attribute] of attributes) {
  const parent = attribute.parentEvent;
  const qualifiedName = `${parent}/${name}`;

  attribute.events
    .filter((event) => event !== parent)
    .forEach((event) => events.get(event).attributes.add(qualifiedName));
  delete attribute.events;

  let path = attribute.fsPath;
  path = path.replace(
    'data-dictionary/events',
    'data-dictionary/proposed-format'
  );
  delete attribute.fsPath;
  delete attribute.parentEvent;

  let yaml = constructYaml(attribute);
  const parentFolder = path.split('/').slice(0, -1).join('/');
  await mkdirp(parentFolder);
  fs.writeFile(path, yaml);
}

for (const [name, event] of events) {
  let path = event.fsPath;
  path = path.replace(
    'data-dictionary/events',
    'data-dictionary/proposed-format'
  );
  delete event.fsPath;
  event.attributes = Array.from(event.attributes).sort();
  if (event.attributes.length === 0) {
    delete event.attributes;
  }

  let yaml = constructYaml(event);
  fs.writeFile(path, yaml);
}
