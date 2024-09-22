'use strict';
import bencode from 'bencode';

import * as fs from 'fs';

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
console.log(torrent.announce.toString('utf8'));