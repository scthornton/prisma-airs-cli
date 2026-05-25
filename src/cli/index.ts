#!/usr/bin/env node

import 'dotenv/config';
import { buildProgram } from './program.js';

buildProgram().parse();
