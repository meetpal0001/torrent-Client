'use strict';

import { Buffer } from 'buffer';
import {open} from './src/torrent-parser.js'
import { net } from 'net';


export const download = torrent => {
  tracker.getPeers(torrent, peers => {
    peers.forEach(dnld);
  });
};

function dnld(peer) {
  const socket = net.Socket();
  socket.on('error', console.log);
  socket.connect(peer.port, peer.ip, () => {
    // socket.write(...) write a message here
  });
  socket.on('data', data => {
    // handle response here
  });
}