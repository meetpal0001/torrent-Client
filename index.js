'use strict';
import bencode from 'bencode';

import * as fs from 'fs';

import {getPeers} from './src/tracker.js'
import {open} from './src/torrent-parser.js'



const torrent = open('puppy.torrent');

getPeers(torrent, peers => {
  console.log('list of peers: ', peers);
});