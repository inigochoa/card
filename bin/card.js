#!/usr/bin/env node

'use strict'

import { join } from 'path';
import { readFileSync } from 'fs';

const output = readFileSync(join(import.meta.dirname, 'output'), 'utf8')

console.log(output)
