/**
 * build-markdown-oktoberfest.js — renders songs-data-oktoberfest.js into Oktoberfest.md,
 * in the same style as build-markdown-september-25.js (setlist + one fenced
 * code block per section, chords stacked over lyrics).
 *
 * Run with: node build-markdown-oktoberfest.js
 */
const fs = require('fs');
const path = require('path');

const T = require('./transpose.js');
const SONGS = require('./songs-data-oktoberfest.js');

function slug(title) {
  return title
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function songHeaderMeta(song) {
  var parts = [];
  if (song.bpm) {
    parts.push('♩ **' + (song.bpmApprox ? '~' : '') + song.bpm + ' BPM**');
  }
  var keyStr = 'Key of **' + song.key + '**';
  if (song.keyNote) keyStr += ' (' + song.keyNote + ')';
  parts.push(keyStr);
  return parts.join(' · ');
}

function renderSection(section) {
  var out = ['**[' + section.label + ']**', ''];
  var lines = section.lines.map(function (line) {
    return line.startsWith('// ') ? '*(' + line.slice(3) + ')*' : line;
  });
  // Note-only lines get pulled out of the fenced block (they're prose, not chart).
  var block = [];
  var chunks = []; // { type: 'code'|'note', lines: [] }
  function pushCurrent() {
    if (block.length) {
      chunks.push({ type: 'code', lines: block.slice() });
      block = [];
    }
  }
  lines.forEach(function (l, i) {
    var raw = section.lines[i];
    if (raw.startsWith('// ')) {
      pushCurrent();
      chunks.push({ type: 'note', text: l });
    } else {
      block.push(l);
    }
  });
  pushCurrent();

  chunks.forEach(function (c) {
    if (c.type === 'note') {
      out.push(c.text, '');
    } else {
      out.push('```', c.lines.join('\n'), '```', '');
    }
  });
  return out.join('\n');
}

function renderSong(song) {
  var out = [];
  out.push('## ' + song.number + '. ' + song.title + ' — ' + song.artist);
  if (song.subtitle) out.push('*' + song.subtitle + '*');
  out.push(songHeaderMeta(song));
  if (song.note) out.push('', '> ' + song.note);
  if (song.bpmNote) out.push('', '> ' + song.bpmNote);
  out.push('');
  song.sections.forEach(function (sec) {
    out.push(renderSection(sec));
  });
  return out.join('\n');
}

function renderSetlist() {
  return SONGS.map(function (song) {
    var meta = [];
    if (song.subtitle) meta.push(song.subtitle);
    if (song.bpm) meta.push('♩ ' + (song.bpmApprox ? '~' : '') + song.bpm + ' BPM');
    meta.push('Key of ' + (song.keyNote || song.key));
    return song.number + '. [' + song.title + '](#' + song.number + '-' + slug(song.title) + ') — ' +
      song.artist + ' · ' + meta.join(' · ');
  }).join('\n');
}

var doc = [];
doc.push('# Oktoberfest — Chord Guide');
doc.push('');
doc.push('> ' + SONGS.length + ' songs · designed to match the transpose-toolbar experience in `chord-guide-dontblink.md` (see `chord_guide_oktoberfest.html`)');
doc.push('> Source chords: the existing chord guides in this project (`SEPTEMBER/chord-guide-september.md`, `SEPTEMBER/chord-guide-v2.md`, `September-25-Songs/chord-guide-september-25.md`, `September-25-Songs/chord-guide-set-2-sep-25.md`); #8 and #9 from the `.docx` chord sheets in `October/` (`Hindi_Na_Nga_Chords_by_This_Band.docx`, `Narda_Chords_by_Kamikazee.docx`)');
doc.push('');
doc.push('---');
doc.push('');
doc.push('## About — Key Transposition');
doc.push('');
doc.push('`chord_guide_oktoberfest.html` adds a per-song **Key** toolbar (below each song title), same as the other guides:');
doc.push('');
doc.push('- Shows the key the chart is written in (e.g. `D`).');
doc.push('- **− / +** buttons step the whole song up or down one semitone at a time.');
doc.push('- The key dropdown jumps straight to any of the 12 keys (key-to-key transposition, e.g. D → G).');
doc.push('- **Reset** returns to the original written key.');
doc.push('- Transposing only rewrites the chords (roots, slash-chord bass notes, and all extensions/qualities like `maj7`, `add9`, `sus4`, `m7b5` are preserved) — lyrics, section labels, and chord-to-lyric spacing are untouched.');
doc.push("- Sharp/flat spelling automatically follows the target key's convention (flat keys: F, Bb, Eb, Ab, Db, Gb — sharp keys: C, G, D, A, E, B, F#).");
doc.push('');
doc.push('The transpose engine lives in `transpose.js` (also usable from Node) with its test suite in `test_transpose.js` (`node test_transpose.js`). Shared with the other guides in this project.');
doc.push('');
doc.push("BPM notes: taken from each song's source sheet / guide (Hindi Na Nga 66 and Narda 120 from their sheets' strumming sections). Tatsulok (102) and Pangako (120) have no BPM on their sheets; those tempos were set for this chart. Tatsulok is written in B minor as on the sheet — its Key toolbar shows minor names (Bm). Bulong (Kitchie Nadal) Verse 2 uses the Verse 1 chord pattern, written in for this chart. Hindi Na Nga's section labels were added for this chart (its sheet has none).");
doc.push('');
doc.push('**Auto-scroll** in `chord_guide_oktoberfest.html` stops at the end of each song (when its last line reaches the bottom of the screen); press Auto-Scroll again to carry on into the next song at that song\'s BPM.');
doc.push('');
doc.push('---');
doc.push('');
doc.push('## Setlist');
doc.push('');
doc.push(renderSetlist());
doc.push('');
doc.push('---');
doc.push('');
SONGS.forEach(function (song, i) {
  doc.push(renderSong(song));
  doc.push('---');
  doc.push('');
});

var outPath = path.join(__dirname, 'Oktoberfest.md');
fs.writeFileSync(outPath, doc.join('\n').replace(/\n{3,}/g, '\n\n\n'), 'utf8');
console.log('Wrote', outPath);
