/**
 * songs-data-oktoberfest.js — the "Oktoberfest" setlist (15 songs).
 *
 * Same shape as songs-data-dontblink.js / songs-data-dnb.js: each song is
 * written-key chords stacked over lyrics, grouped into labeled sections.
 * `transpose.js` operates directly on these raw lines, so this file is the
 * single source of truth for both the Markdown chart
 * (build-markdown-oktoberfest.js -> Oktoberfest.md) and the interactive HTML
 * page (chord_guide_oktoberfest.html).
 *
 * A line that starts with "// " is a performance note/directive, shown as an
 * italic note (not transposed).
 *
 * Sources: songs 1-7 and 10-15 come from the existing chord guides
 * (SEPTEMBER/songs-data.js / chord-guide-september.md for Bulong and Same
 * Ground, SEPTEMBER/chord-guide-v2.md,
 * September-25-Songs/chord-guide-september-25.md,
 * September-25-Songs/chord-guide-set-2-sep-25.md); 8 (Hindi Na Nga) and
 * 9 (Narda) come from the .docx sheets in October/. Hindi Na Nga's section
 * labels were added for this chart (the sheet has none). Narda's Intro shows
 * only the strummed D Bm G A (the sheet's fingerpicked tab intro, with its
 * Bmadd4, is left out of this chart; the .docx itself is unchanged).
 *
 * 2026-10-15 changes (user-approved): Bulong (Kitchie Nadal) Verse 2 now has
 * chords written in - Verse 1's pattern (D-E / G-D) mapped onto the Verse 2
 * lyrics, since the sheet only says "same as verse 1 chord pattern".
 *
 * 2026-10-15 (later, user-requested): Same Ground (Kitchie Nadal) added as
 * song 2, verbatim from SEPTEMBER/songs-data.js; Bulong's segue note and
 * [Transition] section were restored as in the September guide.
 *
 * 2026-10-17 (user-approved), from the updated .docx sheets:
 * - Sine Sine (AUGUST 2026/CHORDS/Sine_Sine_Chords__ver_2__...docx): "D B7 E /
 *   panahon.." now closes Choruses 1 and 2 (no separate Repeat Intro / End);
 *   added [Instrumental] (tabs expanded as Word lays them out) and a third
 *   [Chorus]; its "/" chord separators are written as "|" so they transpose.
 * - Same Ground (SEPTEMBER/September/Same_Ground_Chords_by_Kitchie_Nadal.docx):
 *   last Chorus break run B-C#-D-C#-B-A-G#-E-F# added with spaces instead of
 *   dashes (so it transposes); lyric tab expanded so "bad" sits under F#m;
 *   Solo line 2 keeps the sheet's leading space.
 *
 * 2026-10-22 (user-requested): Sabot-Sabot gets the chord-only OUTRO
 * (Em Am F G / Em Am Am G F) added at the end of its .docx
 * (AUGUST 2026/CHORDS/Sabot_Sabot_Chords_by_Phylum.docx).
 *
 * Tatsulok is written in B minor, so it's stored as key "B" + minor (the
 * HTML labels its keys as minor and spells by the relative major).
 *
 * BPM: from each source sheet / guide, except Tatsulok (102) and Pangako
 * (120), which have none on their sheets and were set by the user.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.OKTOBERFEST_SONGS = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SONGS = [
    {
      number: 1,
      title: "Bulong",
      artist: "Kitchie Nadal",
      key: "D",
      bpm: 84,
      bpmApprox: true,
      note: "Segues directly into Same Ground — same tempo, no break",
      sections: [
        { label: "Intro", lines: [
          "D (Dsus D) E G D (x2)"
        ] },
        { label: "Verse 1", lines: [
          "D                     E",
          "Ikaw ba'y nalulungkot nababalot pa ng poot",
          "G                         D",
          "Maraming hinanakit sa mundo",
          "D",
          "Di alam anung gagawin",
          "      E",
          "Kundi ubusin ang oras sa gin",
          "  G                         D",
          "Akala mo'y iya'y may mararating"
        ] },
        { label: "Chorus", lines: [
          "D         C   G      Cadd9       G          D",
          "Hoy kaibigan ko pakinggan mong mga bulong sayo",
          "D           C           G    Cadd9      G           D",
          "Ito'y 'di galing sa mundo patungo sa pangakong paraiso"
        ] },
        { label: "Instrumental", lines: [
          "D (Dsus D) E G D (x2)"
        ] },
        { label: "Verse 2", lines: [
          "D                    E",
          "Nasan nang talino mo diskarte kamo ng kano",
          "G                             D",
          "Tapakan ang lahat kahit kapwa mo",
          "",
          "D                     E",
          "Minsan ang kagitingan ay wala sa bigat ng pinanapasan",
          "G                        D",
          "Sa pagsuko't pagharap ng kabiguan"
        ] },
        { label: "Chorus", lines: [
          "D         C   G      Cadd9       G          D",
          "Hoy kaibigan ko pakinggan mong mga bulong sayo",
          "D           C           G    Cadd9      G           D",
          "Ito'y 'di galing sa mundo patungo sa pangakong paraiso"
        ] },
        { label: "Bridge", lines: [
          "Bm             G        Em       D/F#",
          "Tumatakbo'ng oras gumising ka't bumangon na",
          "   G                      A",
          "Pagka't hindi na ikaw ang biktima"
        ] },
        { label: "Instrumental", lines: [
          "D (Dsus D) E G D (x2)"
        ] },
        { label: "Interlude", lines: [
          "D E G D"
        ] },
        { label: "Chorus", lines: [
          "D         C   G      Cadd9       G          D",
          "Hoy kaibigan ko pakinggan mong mga bulong sayo",
          "D           C           G    Cadd9      G           D",
          "Ito'y 'di galing sa mundo patungo sa pangakong paraiso",
          "",
          "D         C   G      Cadd9       G          D",
          "Hoy kaibigan ko pakinggan mong mga bulong sayo",
          "D           C           G    Cadd9      G           D",
          "Ito'y 'di galing sa mundo patungo sa pangakong paraiso",
          "Cadd9      G           D",
          "patungo sa pangakong paraiso",
          "Cadd9      G               D",
          "patungo sa pangakong ………… paraiso",
          "",
          "D  E  G  D"
        ] },
        { label: "Transition", lines: [
          "// Prepare for transition to Same Ground",
          "A  G"
        ] }
      ]
    },
    {
      number: 2,
      title: "Same Ground",
      artist: "Kitchie Nadal",
      key: "A",
      bpm: 84,
      bpmApprox: true,
      note: "Segues directly from Bulong — same tempo, no break",
      sections: [
        { label: "Intro", lines: [
          "A       G   A       G"
        ] },
        { label: "Verse 1", lines: [
          "A                      G",
          "  My love, it's been a long time",
          "                           A               G",
          "Since I cried and left you out of the blue",
          "A                    G                             A   G",
          "  It's hard leaving you the way when I never wanted to",
          "A                 G",
          "Self-denial is a game, a stranger",
          "                        A              G",
          "I never would want until there was you",
          "              A",
          "'Cause I have learned that love is beyond",
          "                            G                                        A G",
          "What human can imagine, the more it clears the more I gotta let you go"
        ] },
        { label: "Chorus", lines: [
          "A                              E                         F#m",
          "   'Cause what I don't understand is why I'm feeling so bad now",
          "          D",
          "When I know it was my idea",
          "A                                          E",
          "   I could have just denied the truth and lied",
          "                   F#m",
          "Now why am I the only one standing",
          "Dm                      A",
          "Stranded on the same ground"
        ] },
        { label: "Interlude", lines: [
          "(A)   G     A   G"
        ] },
        { label: "Verse 2", lines: [
          "A                       G",
          "  My love, it's been a long time",
          "                           A              G",
          "Since I cried and left you out of the blue",
          "A                    G                             A   G",
          "  It's hard leaving you the way when I never wanted to",
          "A                 G",
          "Self-denial is a game, a stranger",
          "                         A             G",
          "I never would want until there was you",
          "              A                                                        G",
          "'Cause I have learned that love is a word gets thrown a little bit too much",
          "                                     A",
          "The best excuse to fill this infinite abyss",
          "                      G",
          "I never ever have to be"
        ] },
        { label: "Chorus", lines: [
          "A                              E                         F#m",
          "   'Cause what I don't understand is why I'm feeling so bad now",
          "          D",
          "When I know it was my idea",
          "A                                          E",
          "   I could have just denied the truth and lied",
          "                   F#m",
          "Now why am I the only one standing",
          "Dm                      A",
          "Stranded on the same ground"
        ] },
        { label: "Solo", lines: [
          "(A)   G     A   G",
          " A    G     A   G"
        ] },
        { label: "Chorus", lines: [
          "A                             E (BREAK) B C# D C# B A G# E F#  F#m",
          "  'Cause what I don't understand is why I'm feeling so      bad now",
          "         D",
          "When I know it was my idea",
          "A                                         E",
          "  I could have just denied the truth and lied",
          "",
          "                  F#m",
          "Now why am I the only one standing",
          "Dm                     A",
          "Stranded on the same ground"
        ] },
        { label: "Interlude", lines: [
          "(A)   G   A   G"
        ] },
        { label: "Outro", lines: [
          "   A               G                     A       G",
          "If all else fails, would you be there to love me?",
          "     A               G",
          "When all else fails, would you be brave",
          "   A                     G   A",
          "To see right through me?"
        ] }
      ]
    },
    {
      number: 3,
      title: "Bulong",
      artist: "December Avenue",
      key: "F",
      bpm: 70,
      sections: [
        { label: "Intro", lines: [
          "F Am7 G"
        ] },
        { label: "Verse 1", lines: [
          "      F            Am7    G",
          "Hindi masabi ang nararamdaman",
          "       F                Am7       G",
          "Di makalapit, sadyang nanginginig nalang",
          "      F                         Am7 G",
          "Mga kamay na sabik sa piling mo",
          "                   F                          Am7      G",
          "Ang iyong matang walang mintis sa pagtigil ng aking mundo"
        ] },
        { label: "Chorus", lines: [
          "       F                    Am7 G",
          "Ako'y alipin ng pag-ibig mo",
          "         F                          Am7 G",
          "Handang ibigin ang 'isang tulad mo",
          "             F                          Am7    G",
          "Hangga't ang puso mo'y sa akin lang hindi ka na malilinlang",
          " F                        Am7          G",
          "Ikaw ang ilaw sa dilim at ang liwanag ng mga bituin"
        ] },
        { label: "Verse 2", lines: [
          "        F                 Am7          G",
          "Hindi mapakali, hanggang tingin nalang",
          "               F                     Am7      G",
          "Bumubulong sa iyong tabi, sadyang walang makapantay",
          "        F                     Am7    G",
          "Sa kagandahang inuukit mo sa isip ko"
        ] },
        { label: "Chorus", lines: [
          "       F                    Am7 G",
          "Ako'y alipin ng pag-ibig mo",
          "         F                         Am7 G",
          "Handang ibigin ang 'isang tulad mo",
          "             F                        Am7      G",
          "Hangga't ang puso mo'y sa akin lang hindi ka na malilinlang",
          " F                        Am7        G",
          "Ikaw ang ilaw sa dilim at ang liwanag ng mga bituin"
        ] },
        { label: "Bridge", lines: [
          "F Am7 G"
        ] },
        { label: "Chorus", lines: [
          "       F                    Am7 G",
          "Ako'y alipin ng pag-ibig mo",
          "         F                         Am7 G",
          "Handang ibigin ang 'isang tulad mo",
          "             F                        Am7      G",
          "Hangga't ang puso mo'y sa akin lang hindi ka na malilinlang",
          " F                        Am7        G",
          "Ikaw ang ilaw sa dilim at ang liwanag ng mga bituin"
        ] },
        { label: "Outro", lines: [
          "F Am7 G"
        ] }
      ]
    },
    {
      number: 4,
      title: "Huling Sandali",
      artist: "December Avenue",
      key: "E",
      bpm: 75,
      sections: [
        { label: "Intro", lines: [
          "E Asus2 F#m",
          "E F#m G#m E",
          "",
          "E Asus2 F#m Asus2 Am"
        ] },
        { label: "Verse 1", lines: [
          "C#m7",
          "      Asus2                   C#m7",
          "Hindi mapigil ang bugso ng aking puso",
          "   Asus2       Bsus4          C#m7",
          "Sa tuwing ako'y papalapit sa'yo",
          "   Asus2                       C#m7",
          "Maaari bang hingin ang iyong kamay?",
          "",
          "        Asus2          Bsus4            C#m7",
          "Hawakan mo't huwag mong bitawan",
          "",
          "C#m7 Asus2 C#m7 Asus2 Bsus4"
        ] },
        { label: "Verse 2", lines: [
          "C#m7",
          "         Asus2                   C#m7",
          "Hindi mapigil ang tibok ng aking puso",
          "   Asus2       Bsus4          C#m7",
          "Sa tuwing ako'y nakatingin sa'yo",
          "   Asus2                       C#m7",
          "Maaari bang huwag kang humiwalay",
          "      Asus2      Bsus4",
          "Dahil sandali na lang"
        ] },
        { label: "Refrain", lines: [
          "F#m          G#m          Asus2",
          "Darating din ang gabing walang pipigil sa 'tin",
          "     F#m           G#m          Asus2        Am",
          "Kung hindi ngayon aasa bang maibabalik ang kahapon?"
        ] },
        { label: "Chorus", lines: [
          "E                                       Asus2",
          "Kahit sandali, palayain ang pusong di mapigil",
          "                          F#m",
          "Sana'y tayong dalawa sa huling pagkakataon",
          "                  Asus2   Am",
          "Na ika'y magiging akin"
        ] },
        { label: "Verse 3", lines: [
          "C#m7",
          "         Asus2                  C#m7",
          "Hindi matigil ang gulo sa aking isip",
          "   Asus2       Bsus4          C#m7",
          "At para bang walang kasing sakit",
          "     Asus2               C#m7",
          "Alaala mong hindi ko malimutan",
          "      Asus2       Bsus4",
          "Oras lang ang may alam"
        ] },
        { label: "Refrain", lines: [
          "     F#m          G#m          Asus2",
          "Kung darating din ang gabing walang pipigil sa 'tin",
          "     F#m            G#m         Asus2         Am",
          "Kung hindi ngayon, aasa bang maibabalik ang kahapon"
        ] },
        { label: "Chorus", lines: [
          "E                                      Asus2",
          "Kahit sandali palayain ang pusong di mapigil",
          "                          F#m",
          "Sana'y tayong dalawa sa huling pagkakataon",
          "                 Asus2    Am",
          "Na hindi na para sa 'tin"
        ] },
        { label: "Bridge", lines: [
          "      C#m           Bsus4",
          "At sa bawat minuto ako'y di natuto",
          " Asus2",
          "Ipilit mang iba, ako'y maghihintay sa 'yo",
          "          C#m                Bsus4",
          "Ikaw ang aking kapiling sa huling sandali",
          "    Asus2                    Am",
          "Kasalanan ba kung puso natin ang magwawagi?"
        ] },
        { label: "Chorus", lines: [
          "           E                            Asus2",
          "Kahit sandali, palayain ang pusong di mapigil",
          "                          F#m",
          "Sana'y tayong dalawa sa huling pagkakataon",
          "                 Asus2   Am",
          "Na hindi na para sa 'tin",
          "           E                              Asus2",
          "Kahit sandali, patawarin ang pusong 'di tumigil",
          "                         F#m",
          "Para sating dalawa ang maling pagkakataon",
          "                  Asus2 Am",
          "Na ika'y magiging akin"
        ] }
      ]
    },
    {
      number: 5,
      title: "Tatsulok",
      artist: "Bamboo",
      key: "B",
      keyNote: "B minor",
      minor: true,
      bpm: 102,
      note: "Key of B minor, as written on the source sheet.",
      sections: [
        { label: "Intro", lines: [
          "Bm    C#    D    Em    F#    Bm"
        ] },
        { label: "Verse 1", lines: [
          " Bm                      A",
          "Totoy bilisan mo, bilisan mo ang takbo",
          " Bm                               G",
          "Ilagan ang mga bombang nakatutok sa ulo mo",
          " Bm                       A",
          "Totoy tumalon ka, dumapa kung kailangan",
          " G                     A              Bm",
          "At baka tamaan pa ng mga balang ligaw",
          "",
          "Bm    C#    D    Em    F#    Bm"
        ] },
        { label: "Verse 2", lines: [
          "Bm                     A",
          "Totoy makinig ka huwag nang magpagabi",
          "Bm",
          "Baka pagkamalan pa't",
          "G",
          "Humandusay dyan sa tabi",
          "Bm                     A",
          "Totoy alam mo ba kung ano ang puno't dulo",
          "G                      A            Bm",
          "Ng di matapos tapos na kaguluhang ito"
        ] },
        { label: "Pre-Chorus", lines: [
          "   G                             F#m",
          "Hindi pula't dilaw ang tunay na magkalaban",
          "G                            F#m",
          "Ang kulay at tatak ay di siyang dahilan",
          "",
          "  Bm                     A",
          "Hangga't marami ang lugmok sa kahirapan",
          "  G           A",
          "At ang hustisya ay para lang sa mayaman",
          "",
          "F#    G     F#    D    C#"
        ] },
        { label: "Chorus", lines: [
          "      Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G   A                  Bm",
          "Hindi matatapos itong gulo",
          "",
          "Bm    C#    D    Em    F#    Bm"
        ] },
        { label: "Verse 3", lines: [
          "Bm                      A",
          "Ngunit ng suminag, kay daming mga tao,",
          " Bm                               G",
          "At ang dating munting bukid, ngayo'y sementeryo",
          " Bm                       A",
          "Totoy kumilos ka, baliktarin ang tatsulok",
          " G                     A              Bm",
          "Tulad ng dukha, nailagay mo sa tuktok"
        ] },
        { label: "Pre-Chorus", lines: [
          "   G                             F#m",
          "Hindi pula't dilaw ang tunay na magkalaban",
          "G                            F#m",
          "Ang kulay at tatak ay di siyang dahilan",
          "  Bm                     A",
          "Hangga't marami ang lugmok sa kahirapan",
          "  G           A",
          "At ang hustisya ay para lang sa mayaman",
          "",
          "F#    G     F#    D    C#"
        ] },
        { label: "Chorus", lines: [
          "   Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G    A                 Bm",
          "Hindi matatapos itong gulo",
          "   Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G    A                 Bm   (Bm 4 counts)",
          "Hindi matatapos itong gulo"
        ] },
        { label: "All Instruments", lines: [
          "Bm  A  Bm  A  Bm",
          "B  A  G  F#  G  A",
          "Bm  A  Bm  A  Bm",
          "B  A  G  F#  G  A  G"
        ] },
        { label: "Pre-Chorus", lines: [
          "// Slower tempo (adagio)",
          "   G                             F#m",
          "Hindi pula't dilaw ang tunay na magkalaban",
          "G                            F#m",
          "Ang kulay at tatak ay di siyang dahilan",
          "  Bm                     A",
          "Hangga't marami ang lugmok sa kahirapan",
          "  G           A             F#m",
          "At ang hustisya ay para lang sa mayaman"
        ] },
        { label: "Chorus", lines: [
          "   Bm (break)                        F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G    A                 Bm",
          "Hindi matatapos itong gulo",
          " Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          "",
          " G   A",
          "Hindi matatapos",
          "G   A",
          "Di matatapos"
        ] },
        { label: "Outro", lines: [
          "G  A                Bm",
          "Di matatapos itong gulo"
        ] }
      ]
    },
    {
      number: 6,
      title: "This Love",
      artist: "Maroon 5",
      key: "G",
      bpm: 95,
      sections: [
        { label: "Intro", lines: [
          "G       Cm   Fm       G7/D"
        ] },
        { label: "Verse 1", lines: [
          "G                       Cm",
          "I was so high I did not recognize",
          "                       Fm",
          "The fire burning in her eyes",
          "               G7/D",
          "The chaos that controlled my mind",
          "G                            Cm",
          "whispered goodbye as she got on a plane",
          "            Fm",
          "Never to return again",
          "                 G7/D",
          "But always in my heart"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm        Bb        Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "",
          "    Cm Fm        Bb          Eb",
          "And her heart is breaking in front of me",
          " Cm       F            Ab              G",
          "I have no choice cause I won't say goodbye anymore"
        ] },
        { label: "Interlude", lines: [
          "G Cm     Fm   G7/D"
        ] },
        { label: "Verse 2", lines: [
          "G                           Cm",
          "I tried my best to feed her appetite",
          "                 Fm",
          "Keep her coming every night",
          "                    G7/D",
          "So hard to keep her satisfied",
          "G                              Cm",
          "Kept playing love like it was just a game",
          "              Fm",
          "Pretending to feel the same",
          "                     G7/D",
          "Then turn around and leave again (oh!)"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm        Bb         Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "    Cm Fm        Bb          Eb",
          "And her heart is breaking in front of me",
          " Cm       F             Ab             G",
          "I have no choice cause I won't say goodbye anymore"
        ] },
        { label: "Interlude", lines: [
          "G   Cm   Fm   G7/D"
        ] },
        { label: "Bridge", lines: [
          "Fm",
          "I'll fix these broken things",
          "Ebmaj7",
          "Repair your broken wings",
          "G7                          Cm",
          "And make sure everything's alright (it's alright)",
          "Fm",
          "My pressure on her hips",
          "Ebmaj7",
          "Sinking my fingertips",
          "",
          "G",
          "Into every inch of you",
          "G7",
          "Cause I know that's what you want me to do"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm         Bb        Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "    Cm Fm         Bb         Eb",
          "And her heart is breaking in front of me",
          " Cm       F             Ab             G",
          "I have no choice cause I won't say goodbye anymore"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm         Bb        Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "    Cm Fm         Bb         Eb",
          "And my heart is breaking in front of me",
          "Cm           F       Ab            G",
          "She said Goodbye too many times before"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm         Bb        Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "    Cm Fm         Bb         Eb",
          "And her heart is breaking in front of me",
          " Cm       F             Ab             G",
          "I have no choice cause I won't say goodbye anymore"
        ] }
      ]
    },
    {
      number: 7,
      title: "Sabot-Sabot",
      artist: "Phylum",
      key: "C",
      bpm: 99,
      sections: [
        { label: "Intro", lines: [
          "C F C F C F C F"
        ] },
        { label: "Verse 1", lines: [
          "C     F         Am            G",
          "  Diba duwa-duwa ra man ning atoa",
          "C         F                Am      G",
          "  Nganung masakitan man ko kung magkuyog mong duha",
          "C      F             Am       G",
          "  Diba nagsabot nata kung mu abot na siya",
          "F               G",
          "  Taposon dayon ni natong relasyon na"
        ] },
        { label: "Instrumental", lines: [
          "C F C F C F C F"
        ] },
        { label: "Verse 2", lines: [
          "C    F         Am      G",
          "  Og ako karon nakapangutana",
          "C          F",
          "  Nganong karon pa man ka",
          "Am           G",
          "  Na may uyab natang duha",
          "C        F        Am       G",
          "  Maikog na nuhon ko sa pagbiya na niya",
          "Am(12x)                             Am-Am",
          "  Kay gipaila-ila nako sa iyang mama"
        ] },
        { label: "Chorus", lines: [
          "                     F",
          "    Maong ikaw akong gibiya-an",
          "       G               C",
          "    Na hina-ot nga makalimtan",
          "",
          "          C(distort) Am",
          "    Ang talagsaong kalipay",
          "         G                   F   G",
          "    Na kanimo ra matagamtaman"
        ] },
        { label: "Instrumental", lines: [
          "C F C F C F C F"
        ] },
        { label: "Verse 3", lines: [
          "C    F         Am      G",
          "  Og ako karon nakapangutana",
          "C          F",
          "  Nganong karon pa man ka",
          "Am           G",
          "  Na may uyab natang duha",
          "C        F        Am       G",
          "  Maikog na nuhon ko sa pagbiya na niya",
          "Am(12x)                             Am-Am",
          "  Kay gipaila-ila nako sa iyang mama"
        ] },
        { label: "Chorus", lines: [
          "                     F",
          "    Maong ikaw akong gibiya-an",
          "       G                C",
          "    Na hina-ot nga makalimtan",
          "          C(distort) Am",
          "    Ang talagsaong kalipay",
          "         G                   F   G",
          "    Na kanimo ra matagamtaman"
        ] },
        { label: "Outro", lines: [
          "F  Am   G     F",
          " Bisag asa ko taman",
          "F Am        Am G F",
          " Palayo sa emong kiliran",
          "F Am        G     F",
          " Halos kada lugar akong ma-abtan",
          "F Am           Am       G          F",
          " Ikaw ra giyapon akong mahinumduman"
        ] },
        { label: "Chorus x2", lines: [
          "                     F",
          "    Maong ikaw akong gibiya-an",
          "       G                C",
          "    Na hina-ot nga makalimtan",
          "          C(distort) Am",
          "    Ang talagsaong kalipay",
          "         G                   F   G",
          "    Na kanimo ra matagamtaman"
        ] },
        { label: "Outro", lines: [
          "Em Am F G",
          "",
          "Em Am Am G F"
        ] }
      ]
    },
    {
      number: 8,
      title: "Hindi Na Nga",
      artist: "This Band",
      key: "G",
      bpm: 66,
      sections: [
        { label: "Intro", lines: [
          "G   Dsus4   Em7   Cadd9   x2"
        ] },
        { label: "Verse 1", lines: [
          "       G              Dsus4",
          "Ang lahat ay nagbabago",
          "  Em7                 Cadd9",
          "Ganon din ang puso ko",
          "    G                   Dsus4",
          "Di alam kung paano aamin",
          "      Em7                   Cadd9 (once)",
          "Kung dapat bang sabihin to"
        ] },
        { label: "Pre-Chorus", lines: [
          "            Em7",
          "Ngunit kailangan nang tapangan",
          "      Dsus4",
          "At sabihin ang nararapat",
          "        Cadd9",
          "Na hindi na nga",
          "          Dsus4 (once)",
          "Hindi na nga"
        ] },
        { label: "Chorus", lines: [
          "  G               Dsus4 (once, then mute)",
          "Alam kong mali na",
          "                       Em7",
          "Pero di ko kayang bumitaw",
          "Ika'y masasaktan",
          "          Cadd9",
          "Dahil pangako ko'y walang iwanan",
          "",
          "  G               Dsus4",
          "Alam kong huli na",
          "                           Em7     Cadd9",
          "Alam kong hindi na nga mahal"
        ] },
        { label: "Verse 2", lines: [
          "           G",
          "Oh ilang beses din sinubukan",
          "   Dsus4",
          "Pinilit ang nararamdaman",
          "      Em7",
          "Pero kulang",
          "     Cadd9",
          "May kulang"
        ] },
        { label: "Pre-Chorus", lines: [
          "   G",
          "Natatakot na malaman",
          "   Dsus4",
          "Natatakot na iyong huhusgahan",
          "       Em7",
          "Na hindi na nga",
          "           Cadd9",
          "Hindi na nga"
        ] },
        { label: "Chorus", lines: [
          "  G               Dsus4 (once, then mute)",
          "Alam kong mali na",
          "                       Em7",
          "Pero di ko kayang bumitaw",
          "Ika'y masasaktan",
          "          Cadd9",
          "Dahil pangako ko'y walang iwanan",
          "",
          "  G               Dsus4",
          "Alam kong huli na",
          "                           Em7     Cadd9",
          "Alam kong hindi na nga mahal"
        ] },
        { label: "Solo", lines: [
          "G   Dsus4   Em7   Cadd9   x2"
        ] },
        { label: "Bridge", lines: [
          "  G              Dsus4",
          "Alam kong huli na",
          "  Em7             Cadd9",
          "Alam kong mali na",
          "  G               Dsus4",
          "Alam kong huli na",
          "  Em7             Cadd9",
          "Alam kong mali na"
        ] },
        { label: "Chorus", lines: [
          "  G               Dsus4 (once, then mute)",
          "Alam kong mali na",
          "                       Em7",
          "Pero di ko kayang bumitaw",
          "Ika'y masasaktan",
          "          Cadd9",
          "Dahil pangako ko'y walang iwanan",
          "",
          "  G               Dsus4",
          "Alam kong huli na",
          "                           Em7        Cadd9",
          "Alam kong hindi na nga mahal"
        ] },
        { label: "Outro", lines: [
          "G   Dsus4                        Em7 Cadd9",
          "            Hindi na nga mahal",
          "G   Dsus4                        Em7 Cadd9",
          "            Hindi ka na mahal",
          "",
          "       G               Dsus4",
          "Ang lahat ay nagbabago",
          "   Em7               Cadd9 (arpeggiate)",
          "Ganon din ang puso ko"
        ] }
      ]
    },
    {
      number: 9,
      title: "Narda",
      artist: "Kamikazee",
      key: "D",
      bpm: 120,
      sections: [
        { label: "Intro", lines: [
          "D       Bm     G      A",
          "D       Bm     G      A"
        ] },
        { label: "Verse 1", lines: [
          "D                       Bm",
          "Tila ibon kung lumipad, Sumabay sa hangin ako'y napatingin",
          "G                       A",
          "Sa dalagang nababalot ng hiwaga.",
          "D                  Bm",
          "Mapapansin kaya sa dami ng yong ginagawa",
          "G                        A",
          "Kung kaagaw ko ang lahat may pag asa bang makilala ka"
        ] },
        { label: "Chorus", lines: [
          "D                    Bm",
          "Awit na nananawagan, baka sakaling napakikinggan,",
          "G                       A",
          "Pag ibig na palaisipan sa kanta na lang idaraan",
          "D                    Bm",
          "Nag aabang sa langit, sa mga ulap sumisilip",
          "G                     A",
          "Sa likod ng mga tala, kahit sulyap lang darna"
        ] },
        { label: "Verse 2", lines: [
          "D                       Bm",
          "Ang swerte nga naman ni ding, lagi ka nyang kapiling",
          "G                       A",
          "Kung ako sa kanya niligawan na kita",
          "D                  Bm",
          "Mapapansin kaya sa dami ng yong ginagawa",
          "G                        A",
          "Kung kaagaw ko ang lahat may pag asa bang makilala ka"
        ] },
        { label: "Chorus", lines: [
          "D                    Bm",
          "Awit na nananawagan, baka sakaling napakikinggan,",
          "G                       A",
          "Pag ibig na palaisipan sa kanta na lang idaraan",
          "D                    Bm",
          "Nag aabang sa langit, sa mga ulap sumisilip",
          "G                     A",
          "Sa likod ng mga tala, kahit sulyap lang darna"
        ] },
        { label: "Verse 3", lines: [
          "D                       Bm",
          "Tumalon kaya ako sa bangin, para lang iyong sagipin",
          "G                       A",
          "Ito ang tanging paraan para mayakap ka",
          "D                  Bm",
          "Darating kaya......sa dami ng ginagawa",
          "G                        A",
          "Kung kaagaw ko sila paano na kaya?"
        ] },
        { label: "Chorus", lines: [
          "D                    Bm",
          "Awit na nananawagan, baka sakaling napakikinggan,",
          "G                       A",
          "Pag ibig na palaisipan sa kanta na lang idaraan",
          "D                    Bm",
          "Nag aabang sa langit, sa mga ulap sumisilip",
          "G                     A",
          "Sa likod ng mga tala, kahit sulyap lang darna",
          "",
          "D                    Bm",
          "Nag aabang sa langit, sa mga ulap sumisilip",
          "G                     A",
          "Sa likod ng mga tala, kahit sulyap lang darna"
        ] }
      ]
    },
    {
      number: 10,
      title: "Saksi Ang Langit",
      artist: "December Avenue",
      key: "G",
      bpm: 85,
      sections: [
        { label: "Intro", lines: [
          "Dmaj7 Gmaj7",
          "Dmaj7 Gmaj7"
        ] },
        { label: "Verse 1", lines: [
          "            D",
          "Nangangarap lang",
          "                  Gmaj7",
          "Habang ika'y pinagmamasdan",
          "                D",
          "Nagbibilang ng iyong hakbang",
          "                     Gmaj7",
          "Hanggang ika'y aking mahagkan"
        ] },
        { label: "Pre-Chorus", lines: [
          "                   Em",
          "'Di sasayangin ang oras sa pag-ibig mo",
          "                G",
          "Mas pipiliin ko",
          "                                    D",
          "Ibigay lahat pati itong aking mundo"
        ] },
        { label: "Chorus", lines: [
          "                     Gmaj7",
          "Halika't sumayaw sa ilalim ng bituin",
          "                       D/F#",
          "Habang ako'y nakatingin sa'yo",
          "                      Em       G",
          "Wala ng 'kong ibang mahihiling",
          "                          D G",
          "Saksi ang langit sa'tin"
        ] },
        { label: "Verse 2", lines: [
          "               D",
          "'Wag kang magtaka",
          "                       G",
          "Kung bakit tayo pinag-isa",
          "                D",
          "'Wag kanang kabahan",
          "                G",
          "Ito'y hindi panaginip lang"
        ] },
        { label: "Pre-Chorus", lines: [
          "                  Em",
          "'Di gumagalaw ang oras sa paligid ko",
          "                   G",
          "Pati itong mundo'y",
          "                                    D",
          "Tumitigil habang ako'y nasa tabi mo"
        ] },
        { label: "Chorus", lines: [
          "                     Gmaj7",
          "Halika't sumayaw sa ilalim ng bituin",
          "                       D/F#",
          "Habang ako'y nakatingin sa'yo",
          "                      Em       G",
          "Wala ng 'kong ibang mahihiling",
          "Saksi ang langit sa'tin"
        ] },
        { label: "Refrain", lines: [
          "D              G",
          "  Oh-oh, oh-oh-oh",
          "                Em",
          "Oh-oh, oh-oh-oh",
          "                G",
          "Oh-oh, oh-oh-oh",
          "                D",
          "Oh-oh, oh-oh-oh",
          "Saksi ang langit",
          "Saksi ang langit sa'tin",
          "G",
          "  Saksi ang langit",
          "Saksi ang langit sa'tin",
          "Em",
          "   Saksi ang langit",
          "Saksi ang langit sa'tin",
          "G",
          "    Saksi ang langit"
        ] },
        { label: "Pre-Chorus", lines: [
          "                  Em",
          "'Di gumagalaw ang oras sa paligid ko",
          "                   G",
          "Pati itong mundo'y",
          "                                    D",
          "Tumitigil habang ako'y nasa tabi mo"
        ] },
        { label: "Chorus", lines: [
          "                     Gmaj7",
          "Halika't sumayaw sa ilalim ng bituin",
          "                        D/F#",
          "Habang ako'y nakatingin sa'yo",
          "                      Em        G",
          "Wala ng 'kong ibang mahihiling",
          "                        D",
          "Saksi ang langit sa'tin (Saksi ang langit)",
          "                     Gmaj7",
          "Halika't sumayaw sa ilalim ng bituin",
          "                      D/F#",
          "Habang ako'y nakadikit sa'yo",
          "                     Em       G",
          "Wala na'kong ibang mahihiling",
          "                 D",
          "Saksi ang langit"
        ] }
      ]
    },
    {
      number: 11,
      title: "Pangako",
      artist: "Cueshé",
      key: "F",
      bpm: 120,
      sections: [
        { label: "Intro", lines: [
          "F (x5)"
        ] },
        { label: "Verse 1", lines: [
          "F",
          "  Kislap ng yong mga mata",
          "Ako'y iyong nadadala",
          "                          Bb",
          "Parang anghel ang yong ganda",
          "                F",
          "Di maiwasan hahanap-hanapin ka",
          " F",
          "O kay tamis ng yong mga ngiti",
          "Ako'y iyong naaakit",
          "                      Bb",
          "Tulad ng rosas nakakaaliw",
          "                            C",
          "Di mapigilang mabighani sa iyo"
        ] },
        { label: "Chorus 1", lines: [
          "   F",
          "At hindi ko hahayaan na",
          " Am",
          "ika'y mawawala",
          "     Bb",
          "Pipilitin ko ang puso",
          "        F",
          "mong mahulog sa akin"
        ] },
        { label: "Verse 2", lines: [
          "F",
          "    Pagsapit ng gabi",
          "Sa isip ay ikaw pa rin",
          "                          Bb",
          "Mga larawan mo sa aking tabi",
          "                C",
          "Na laging nakamasid"
        ] },
        { label: "Chorus 1", lines: [
          "   F",
          "At hindi ko hahayaan na",
          " Am",
          "ika'y mawawala",
          "     Bb",
          "Pipilitin ko ang puso",
          "        F",
          "mong mahulog sa akin"
        ] },
        { label: "Chorus 2", lines: [
          "   F",
          "At hinding-hindi ka",
          "                 Am",
          "magaalinlangan pangako ito",
          "     Bb                    F",
          "Gagawin ang lahat para sa iyo"
        ] },
        { label: "Bridge", lines: [
          "C            Bb Bb Dm",
          "  Oh woh woh hoh",
          "C             Bb C",
          "  Oh woh wohh wohh"
        ] },
        { label: "Guitar Solo", lines: [
          "F  Am  Bb  F"
        ] },
        { label: "Chorus 1", lines: [
          "   F",
          "At hindi ko hahayaan na",
          " Am",
          "ika'y mawawala",
          "     Bb",
          "Pipilitin ko ang puso",
          "        F",
          "mong mahulog sa akin"
        ] },
        { label: "Chorus 2", lines: [
          "   F",
          "At hinding-hindi ka",
          "                 Am",
          "magaalinlangan pangako ito",
          "     Bb                    F",
          "Gagawin ang lahat para sa iyo"
        ] },
        { label: "Outro", lines: [
          "F  F (hold)"
        ] }
      ]
    },
    {
      number: 12,
      title: "Ang Huling El Bimbo",
      artist: "Eraserheads",
      key: "G",
      bpm: 90,
      sections: [
        { label: "Intro", lines: [
          "G   A7      C        G   x2"
        ] },
        { label: "Verse 1", lines: [
          "(G)                A7",
          "Kamukha mo si Paraluman,",
          "C                      G",
          "  Nung tayo ay bata pa.",
          "G                         A7",
          "  At ang galing-galing mo sumayaw,",
          "      C               G",
          "Mapa boogie man o cha-cha.",
          "            G   A7",
          "Ngunit ang paborito,",
          "       C              G",
          "Ay pagsayaw mo ng el bimbo.",
          "         G          A7",
          "Nakakaindak, nakakaaliw,",
          "          C        G",
          "Nakakatindig balahibo."
        ] },
        { label: "Pre-Chorus 1", lines: [
          "Em                  G            C             D",
          "   Pagkagaling sa skwela ay didiretso na sa inyo,",
          "Em              G             C         D",
          "   At buong maghapon ay tinuturuan mo ako."
        ] },
        { label: "Chorus", lines: [
          "      G          A7",
          "Magkahawak ang ating kamay,",
          "      C             G",
          "At walang kamalay-malay.",
          "         G          A7",
          "Na tinuruan mo ang puso ko,",
          "     C        G",
          "Na umibig ng tunay."
        ] },
        { label: "Verse 2", lines: [
          "(G)                      A7",
          "Naninigas ang aking katawan,",
          "    C              G",
          "Pagumikot na ang plaka.",
          "G                   A7",
          "  Patay sa kembot ng bewang mo,",
          "         C                 G",
          "At ang pungay ng iyong mga mata.",
          "       G        A7",
          "Lumiliwanag ang buhay,",
          "         C             G",
          "Habang tayo'y magkaakbay.",
          "           G            A7",
          "At dahan-dahang dumudulas,",
          "           C                  G",
          "Ang kamay ko sa makinis mong braso."
        ] },
        { label: "Pre-Chorus 2", lines: [
          "Em        G              C           D",
          "   Sana noon pa man ay sinabi na sa iyo,",
          "Em                G           C            D",
          "   Kahit hindi na uso ay ito lang ang alam ko."
        ] },
        { label: "Chorus", lines: [
          "      G          A7",
          "Magkahawak ang ating kamay,",
          "      C             G",
          "At walang kamalay-malay.",
          "         G          A7",
          "Na tinuruan mo ang puso ko,",
          "     C        G",
          "Na umibig ng tunay."
        ] },
        { label: "Bridge", lines: [
          "          G",
          "La la la la",
          "   A7",
          "La la",
          "    C",
          "La la",
          "         G",
          "La la la la"
        ] },
        { label: "Verse 3", lines: [
          "(G)                     A7",
          "Lumipas ang maraming taon,",
          "C                  G",
          "  Di na tayo nagkita.",
          "G                           A7",
          "  Balita ko'y may anak ka na,",
          "    C             G",
          "Ngunit walang asawa.",
          "     G         A7        C",
          "Tagahugas ka raw ng pinggan",
          "          G",
          "Sa may Ermita.",
          "            G        A7",
          "At isang gabi nasagasaan,",
          "              C           G",
          "Sa isang madilim na eskinita."
        ] },
        { label: "Pre-Chorus 3", lines: [
          "Em              G            C            D",
          "   Lahat ng pangarap ko'y bigla lang natunaw,",
          "Em                  G          C          D",
          "   Sa panaginip na lang pala kita maisasayaw."
        ] },
        { label: "Chorus", lines: [
          "      G          A7",
          "Magkahawak ang ating kamay,",
          "      C             G",
          "At walang kamalay-malay.",
          "         G          A7",
          "Na tinuruan mo ang puso ko,",
          "     C        G",
          "Na umibig ng tunay."
        ] },
        { label: "Chorus", lines: [
          "      G          A7",
          "Magkahawak ang ating kamay,",
          "      C             G",
          "At walang kamalay-malay.",
          "        G           A7",
          "Na tinuruan mo ang puso ko,",
          "     C        G",
          "Na umibig ng tunay."
        ] },
        { label: "Coda", lines: [
          "          G",
          "La la la la",
          "   A7",
          "La la",
          "    C",
          "La la",
          "         G",
          "La la la la"
        ] }
      ]
    },
    {
      number: 13,
      title: "Ulan",
      artist: "Cueshé",
      subtitle: "Half Empty, Half Full",
      key: "B",
      bpm: 72,
      bpmApprox: true,
      sections: [
        { label: "Intro", lines: [
          "B D# x2",
          "B D# G#m E"
        ] },
        { label: "Verse 1", lines: [
          "B                F#",
          "Lagi na lang umuulan",
          "B                   F#",
          "Parang walang katapusan",
          "          C#        E",
          "Tulad ng paghihirap ko ngayon",
          "      B          D#",
          "Parang walang humpay",
          "        G#m",
          "Sa kabila ng lahat",
          "          G",
          "Ng aking pagsisikap",
          "      B",
          "Na limutin ka",
          "   F#             B D# G#m E",
          "Ay di pa rin magawa"
        ] },
        { label: "Verse 2", lines: [
          "B                  F#",
          "Hindi naman ako tanga",
          "B                  F#",
          "Alam ko na wala ka na",
          "       C#            E",
          "Pero mahirap lang na tanggapin",
          "   B         D#",
          "Di na kita kapiling",
          "       G#m",
          "Iniwan mo akong",
          "     G",
          "Nag iisa",
          "      B",
          "Sa gitna ng dilim",
          "     F#                 B     F#   E",
          "At basang basa pa sa ulan"
        ] },
        { label: "Chorus", lines: [
          "B                D#",
          "Pero wag mag alala",
          "       G#m          C#7",
          "Di na kita gagambalain",
          "           C#m",
          "Alam ko namang ngayong",
          "      E                 B  F#  E",
          "May kapiling ka ng iba",
          "B                       D#",
          "Tanging hiling ko sa 'yo",
          "     G#m        C#7",
          "Na tuwing umuulan",
          "            C#m",
          "Maalala mo sanang may",
          "   E             B D# G#m C# C#m F# B (Ad Lib)",
          "Nagmamahal sa 'yo, oh, oh, oh....."
        ] },
        { label: "Verse 3", lines: [
          "B                 F#",
          "Lagi na lang umuulan",
          "B                  F#",
          "Parang walang katapusan",
          "           C#           E",
          "Tulad ng paghihirap ko ngayon",
          "      B         D#",
          "Parang walang humpay",
          "       G#m",
          "Iniwan mo akong",
          "    G",
          "Nag iisa",
          "      B",
          "Sa gitna ng dilim",
          "     F#                   B  F#    E",
          "At basang basa pa sa ulan"
        ] },
        { label: "Chorus", lines: [
          "B                D#",
          "Pero wag mag alala",
          "       G#m         C#",
          "Di na kita gagambalain",
          "           C#m",
          "Alam ko namang ngayong",
          "      E               B  F#   E",
          "May kapiling ka ng iba",
          "B                     D#",
          "Tanging hiling ko sa 'yo",
          "     G#m        C#",
          "Na tuwing umuulan",
          "            C#m",
          "Maalala mo sanang may",
          "   E            B   F#   E",
          "Nagmamahal sa 'yo ako"
        ] },
        { label: "Outro", lines: [
          "B     F#",
          "La la la la la",
          "G#m   F#",
          "La la la la la",
          "A     E     B",
          "La la la la la...."
        ] }
      ]
    },
    {
      number: 14,
      title: "Sine Sine",
      artist: "Missing Filemon",
      key: "A",
      bpm: 90,
      sections: [
        { label: "Intro", lines: [
          "D B E       E7"
        ] },
        { label: "Verse 1", lines: [
          "A       C#7            F#m",
          "Sinesine wala tay laing lingaw",
          "  A7",
          "Kandila luyo sa habol",
          "D                Dm",
          "Katawang binayran og pisong kinawat",
          "A              E",
          "Sa gubaong pitakang lola",
          "A        C#7",
          "Anino sa mga artistang papel",
          "  A7",
          "Gihinganlan tag si Pedro'g",
          "D                 Dm",
          "Sabel Sila'ng bida niadtong estorya",
          "A                E",
          "Sa gugma nga way katumanan"
        ] },
        { label: "Chorus", lines: [
          "A          C#7        F#m",
          "Sine..sinesine sa bata pa",
          "A7                 D",
          "Di na unta matapos pa",
          "  C#m    F#m    Bm         E",
          "Bisan pa man sa pagdagan sa panahon",
          "A          C#7        F#m",
          "Lantawon mga eksena nga molabay",
          "A7                 D",
          "Tanang tawo makasakay",
          "",
          "C#m   F#m    Bm         E",
          "Saksihan ta ang pagdagan sa panahon",
          "",
          "D B7 E",
          "panahon.."
        ] },
        { label: "Verse 2", lines: [
          "A       C#7            F#m",
          "Sigesigeha lang imong paglakaw",
          "  A7",
          "Ay'g kahadlok may kahayag",
          "D                Dm",
          "Modan-ag sa dalang mangitngit",
          "  A                      E",
          "Lakip na ang langit daw lapad nga adlaw",
          "A       C#7            F#m",
          "Ang kinabuhi sugilanong hiwi",
          "  A7",
          "Kalipay kasakit ug kalami",
          "D                Dm",
          "Silang bida niining salida",
          "A                      E",
          "Sa gugma nga way katumanan"
        ] },
        { label: "Chorus", lines: [
          "A          C#7         F#m",
          "Sine..sinesine sa bata pa",
          "A7                   D",
          "Di na unta matapos pa",
          "  C#m    F#m      Bm       E",
          "Bisan pa man sa pagdagan sa panahon",
          "A          C#7         F#m",
          "Lantawon mga eksena nga molabay",
          "A7                   D",
          "Tanang tawo makasakay",
          "C#m   F#m      Bm        E",
          "Saksihan ta ang pagdagan sa panahon",
          "",
          "D B7 E",
          "panahon.."
        ] },
        { label: "Instrumental", lines: [
          "A      C#7   F#m    A7     D     Dm     A      E"
        ] },
        { label: "Chorus", lines: [
          "A         C#7         F#m",
          "Sine..sinesine sa bata pa",
          "A7                 D",
          "Di na unta matapos pa",
          " C#m   | F#m   |  Bm         E",
          "Bisan pa man sa pagdagan sa panahon",
          "A         C#7         F#m",
          "Lantawon mga eksena nga molabay",
          "A7                 D",
          "Tanang tawo makasakay",
          "C#m   | F#m   |  Bm         E",
          "Saksihan ta ang pagdagan sa panahon"
        ] }
      ]
    },
    {
      number: 15,
      title: "Nobela",
      artist: "Join the Club",
      key: "E",
      bpm: 80,
      sections: [
        { label: "Intro", lines: [
          "D# Gm        D# Gm G#"
        ] },
        { label: "Verse", lines: [
          "G#          D#",
          "ngumiti kahit na napipilitan",
          "",
          "G#                D#",
          "kahit pa sinasadya",
          "G#             D#",
          "mo akong masaktan paminsan-minsan",
          "G#                 A# (break)",
          "bawat sandali na lang",
          "G#              D#",
          "tulad mo ba akong nahihirapan",
          "G#             D#",
          "lalo't naiisip ka",
          "G#             D#",
          "di ko na kaya pang makalimutan",
          "C#                 A#",
          "bawat sandali na lang"
        ] },
        { label: "Chorus", lines: [
          "    G#           A#",
          "at aalis magbabalik",
          "      D#         Cm",
          "at uuliting sabihin",
          "       G#         A#",
          "na mahalin kat sambitin",
          "         Gm      Cm",
          "kahit muli masaktan",
          "         G#",
          "sa pag-alis",
          "ako'y magbabalik",
          "       G#m A#",
          "sana naman"
        ] },
        { label: "Verse", lines: [
          "G#              D#",
          "sa isang marikit na alaala",
          "G#              D#",
          "pangitahing kay ganda",
          "G#              D#",
          "sana ngay pagbigyan",
          "G#",
          "na ng tadhana",
          "                 A#",
          "bawat sandali na lang",
          "G#              D#",
          "sumabay sa biglang pagkabahala",
          "G#              D#",
          "lumabis ang pagtataka",
          "G#              D#",
          "tunay na pagsintang di alintana",
          "C#                 A#",
          "bawat sandali na lang"
        ] },
        { label: "Chorus", lines: [
          "    G#           A#",
          "at aalis magbabalik",
          "      D#         Cm",
          "at uuliting sabihin",
          "       G#         A#",
          "na mahalin kat sambitin",
          "         Gm      Cm",
          "kahit muli masaktan",
          "         G#",
          "sa pag-alis",
          "ako'y magbabalik",
          "       G#m",
          "sana naman"
        ] },
        { label: "Solo 1", lines: [
          "C#M7 A#m9 F#M7 G# x2 (break)"
        ] },
        { label: "Solo 2", lines: [
          "F# F#m C#M7 C#7",
          "F# F#m G#"
        ] },
        { label: "Bridge", lines: [
          "    F#          C#",
          "ngumiti kahit na napipilitan",
          "F#              C#",
          "kahit pa sinasadya",
          "F#             C#",
          "mo akong masaktan paminsan-minsan",
          "B                  G#",
          "bawat sandali na lang"
        ] },
        { label: "Chorus", lines: [
          "     F#           G#",
          "at aalis magbabalik",
          "     C#          A#m",
          "at uuliting sabihin",
          "     F#           G#",
          "na mahalin kat sambitin",
          "      Fm       A#m",
          "kahit muli masaktan",
          "     F#",
          "sa pag-alis",
          "ako'y magbabalik",
          "      F#m F# G#",
          "sana naman"
        ] }
      ]
    }
  ];

  return SONGS;
}));
