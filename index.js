'use strict';
import bencode from 'bencode';

import * as fs from 'fs';

import {download} from './src/download.js';

import {getPeers} from './src/tracker.js'
import {open} from './src/torrent-parser.js'



const torrent = open(process.argv[2]);

download(torrent);