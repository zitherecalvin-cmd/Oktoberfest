# Oktoberfest — Chord Guide

> 15 songs · designed to match the transpose-toolbar experience in `chord-guide-dontblink.md` (see `chord_guide_oktoberfest.html`)
> Source chords: the existing chord guides in this project (`SEPTEMBER/chord-guide-september.md`, `SEPTEMBER/chord-guide-v2.md`, `September-25-Songs/chord-guide-september-25.md`, `September-25-Songs/chord-guide-set-2-sep-25.md`); #8 and #9 from the `.docx` chord sheets in `October/` (`Hindi_Na_Nga_Chords_by_This_Band.docx`, `Narda_Chords_by_Kamikazee.docx`)

---

## About — Key Transposition

`chord_guide_oktoberfest.html` adds a per-song **Key** toolbar (below each song title), same as the other guides:

- Shows the key the chart is written in (e.g. `D`).
- **− / +** buttons step the whole song up or down one semitone at a time.
- The key dropdown jumps straight to any of the 12 keys (key-to-key transposition, e.g. D → G).
- **Reset** returns to the original written key.
- Transposing only rewrites the chords (roots, slash-chord bass notes, and all extensions/qualities like `maj7`, `add9`, `sus4`, `m7b5` are preserved) — lyrics, section labels, and chord-to-lyric spacing are untouched.
- Sharp/flat spelling automatically follows the target key's convention (flat keys: F, Bb, Eb, Ab, Db, Gb — sharp keys: C, G, D, A, E, B, F#).

The transpose engine lives in `transpose.js` (also usable from Node) with its test suite in `test_transpose.js` (`node test_transpose.js`). Shared with the other guides in this project.

BPM notes: taken from each song's source sheet / guide (Hindi Na Nga 66 and Narda 120 from their sheets' strumming sections). Tatsulok (102) and Pangako (120) have no BPM on their sheets; those tempos were set for this chart. Tatsulok is written in B minor as on the sheet — its Key toolbar shows minor names (Bm). Bulong (Kitchie Nadal) Verse 2 uses the Verse 1 chord pattern, written in for this chart. Hindi Na Nga's section labels were added for this chart (its sheet has none).

**Auto-scroll** in `chord_guide_oktoberfest.html` stops at the end of each song (when its last line reaches the bottom of the screen); press Auto-Scroll again to carry on into the next song at that song's BPM.

---

## Setlist

1. [Bulong](#1-bulong) — Kitchie Nadal · ♩ ~84 BPM · Key of D
2. [Same Ground](#2-same-ground) — Kitchie Nadal · ♩ ~84 BPM · Key of A
3. [Bulong](#3-bulong) — December Avenue · ♩ 70 BPM · Key of F
4. [Huling Sandali](#4-huling-sandali) — December Avenue · ♩ 75 BPM · Key of E
5. [Tatsulok](#5-tatsulok) — Bamboo · ♩ 102 BPM · Key of B minor
6. [This Love](#6-this-love) — Maroon 5 · ♩ 95 BPM · Key of G
7. [Sabot-Sabot](#7-sabot-sabot) — Phylum · ♩ 99 BPM · Key of C
8. [Hindi Na Nga](#8-hindi-na-nga) — This Band · ♩ 66 BPM · Key of G
9. [Narda](#9-narda) — Kamikazee · ♩ 120 BPM · Key of D
10. [Saksi Ang Langit](#10-saksi-ang-langit) — December Avenue · ♩ 85 BPM · Key of G
11. [Pangako](#11-pangako) — Cueshé · ♩ 120 BPM · Key of F
12. [Ang Huling El Bimbo](#12-ang-huling-el-bimbo) — Eraserheads · ♩ 90 BPM · Key of G
13. [Ulan](#13-ulan) — Cueshé · Half Empty, Half Full · ♩ ~72 BPM · Key of B
14. [Sine Sine](#14-sine-sine) — Missing Filemon · ♩ 90 BPM · Key of A
15. [Nobela](#15-nobela) — Join the Club · ♩ 80 BPM · Key of E

---

## 1. Bulong — Kitchie Nadal
♩ **~84 BPM** · Key of **D**

> Segues directly into Same Ground — same tempo, no break

**[Intro]**

```
D (Dsus D) E G D (x2)
```

**[Verse 1]**

```
D                     E
Ikaw ba'y nalulungkot nababalot pa ng poot
G                         D
Maraming hinanakit sa mundo
D
Di alam anung gagawin
      E
Kundi ubusin ang oras sa gin
  G                         D
Akala mo'y iya'y may mararating
```

**[Chorus]**

```
D         C   G      Cadd9       G          D
Hoy kaibigan ko pakinggan mong mga bulong sayo
D           C           G    Cadd9      G           D
Ito'y 'di galing sa mundo patungo sa pangakong paraiso
```

**[Instrumental]**

```
D (Dsus D) E G D (x2)
```

**[Verse 2]**

```
D                    E
Nasan nang talino mo diskarte kamo ng kano
G                             D
Tapakan ang lahat kahit kapwa mo

D                     E
Minsan ang kagitingan ay wala sa bigat ng pinanapasan
G                        D
Sa pagsuko't pagharap ng kabiguan
```

**[Chorus]**

```
D         C   G      Cadd9       G          D
Hoy kaibigan ko pakinggan mong mga bulong sayo
D           C           G    Cadd9      G           D
Ito'y 'di galing sa mundo patungo sa pangakong paraiso
```

**[Bridge]**

```
Bm             G        Em       D/F#
Tumatakbo'ng oras gumising ka't bumangon na
   G                      A
Pagka't hindi na ikaw ang biktima
```

**[Instrumental]**

```
D (Dsus D) E G D (x2)
```

**[Interlude]**

```
D E G D
```

**[Chorus]**

```
D         C   G      Cadd9       G          D
Hoy kaibigan ko pakinggan mong mga bulong sayo
D           C           G    Cadd9      G           D
Ito'y 'di galing sa mundo patungo sa pangakong paraiso

D         C   G      Cadd9       G          D
Hoy kaibigan ko pakinggan mong mga bulong sayo
D           C           G    Cadd9      G           D
Ito'y 'di galing sa mundo patungo sa pangakong paraiso
Cadd9      G           D
patungo sa pangakong paraiso
Cadd9      G               D
patungo sa pangakong ………… paraiso

D  E  G  D
```

**[Transition]**

*(Prepare for transition to Same Ground)*

```
A  G
```

---

## 2. Same Ground — Kitchie Nadal
♩ **~84 BPM** · Key of **A**

> Segues directly from Bulong — same tempo, no break

**[Intro]**

```
A       G   A       G
```

**[Verse 1]**

```
A                      G
  My love, it's been a long time
                           A               G
Since I cried and left you out of the blue
A                    G                             A   G
  It's hard leaving you the way when I never wanted to
A                 G
Self-denial is a game, a stranger
                        A              G
I never would want until there was you
              A
'Cause I have learned that love is beyond
                            G                                        A G
What human can imagine, the more it clears the more I gotta let you go
```

**[Chorus]**

```
A                              E                         F#m
   'Cause what I don't understand is why I'm feeling so bad now
          D
When I know it was my idea
A                                          E
   I could have just denied the truth and lied
                   F#m
Now why am I the only one standing
Dm                      A
Stranded on the same ground
```

**[Interlude]**

```
(A)   G     A   G
```

**[Verse 2]**

```
A                       G
  My love, it's been a long time
                           A              G
Since I cried and left you out of the blue
A                    G                             A   G
  It's hard leaving you the way when I never wanted to
A                 G
Self-denial is a game, a stranger
                         A             G
I never would want until there was you
              A                                                        G
'Cause I have learned that love is a word gets thrown a little bit too much
                                     A
The best excuse to fill this infinite abyss
                      G
I never ever have to be
```

**[Chorus]**

```
A                              E                         F#m
   'Cause what I don't understand is why I'm feeling so bad now
          D
When I know it was my idea
A                                          E
   I could have just denied the truth and lied
                   F#m
Now why am I the only one standing
Dm                      A
Stranded on the same ground
```

**[Solo]**

```
(A)   G     A   G
 A    G     A   G
```

**[Chorus]**

```
A                             E (BREAK) B C# D C# B A G# E F#  F#m
  'Cause what I don't understand is why I'm feeling so      bad now
         D
When I know it was my idea
A                                         E
  I could have just denied the truth and lied

                  F#m
Now why am I the only one standing
Dm                     A
Stranded on the same ground
```

**[Interlude]**

```
(A)   G   A   G
```

**[Outro]**

```
   A               G                     A       G
If all else fails, would you be there to love me?
     A               G
When all else fails, would you be brave
   A                     G   A
To see right through me?
```

---

## 3. Bulong — December Avenue
♩ **70 BPM** · Key of **F**

**[Intro]**

```
F Am7 G
```

**[Verse 1]**

```
      F            Am7    G
Hindi masabi ang nararamdaman
       F                Am7       G
Di makalapit, sadyang nanginginig nalang
      F                         Am7 G
Mga kamay na sabik sa piling mo
                   F                          Am7      G
Ang iyong matang walang mintis sa pagtigil ng aking mundo
```

**[Chorus]**

```
       F                    Am7 G
Ako'y alipin ng pag-ibig mo
         F                          Am7 G
Handang ibigin ang 'isang tulad mo
             F                          Am7    G
Hangga't ang puso mo'y sa akin lang hindi ka na malilinlang
 F                        Am7          G
Ikaw ang ilaw sa dilim at ang liwanag ng mga bituin
```

**[Verse 2]**

```
        F                 Am7          G
Hindi mapakali, hanggang tingin nalang
               F                     Am7      G
Bumubulong sa iyong tabi, sadyang walang makapantay
        F                     Am7    G
Sa kagandahang inuukit mo sa isip ko
```

**[Chorus]**

```
       F                    Am7 G
Ako'y alipin ng pag-ibig mo
         F                         Am7 G
Handang ibigin ang 'isang tulad mo
             F                        Am7      G
Hangga't ang puso mo'y sa akin lang hindi ka na malilinlang
 F                        Am7        G
Ikaw ang ilaw sa dilim at ang liwanag ng mga bituin
```

**[Bridge]**

```
F Am7 G
```

**[Chorus]**

```
       F                    Am7 G
Ako'y alipin ng pag-ibig mo
         F                         Am7 G
Handang ibigin ang 'isang tulad mo
             F                        Am7      G
Hangga't ang puso mo'y sa akin lang hindi ka na malilinlang
 F                        Am7        G
Ikaw ang ilaw sa dilim at ang liwanag ng mga bituin
```

**[Outro]**

```
F Am7 G
```

---

## 4. Huling Sandali — December Avenue
♩ **75 BPM** · Key of **E**

**[Intro]**

```
E Asus2 F#m
E F#m G#m E

E Asus2 F#m Asus2 Am
```

**[Verse 1]**

```
C#m7
      Asus2                   C#m7
Hindi mapigil ang bugso ng aking puso
   Asus2       Bsus4          C#m7
Sa tuwing ako'y papalapit sa'yo
   Asus2                       C#m7
Maaari bang hingin ang iyong kamay?

        Asus2          Bsus4            C#m7
Hawakan mo't huwag mong bitawan

C#m7 Asus2 C#m7 Asus2 Bsus4
```

**[Verse 2]**

```
C#m7
         Asus2                   C#m7
Hindi mapigil ang tibok ng aking puso
   Asus2       Bsus4          C#m7
Sa tuwing ako'y nakatingin sa'yo
   Asus2                       C#m7
Maaari bang huwag kang humiwalay
      Asus2      Bsus4
Dahil sandali na lang
```

**[Refrain]**

```
F#m          G#m          Asus2
Darating din ang gabing walang pipigil sa 'tin
     F#m           G#m          Asus2        Am
Kung hindi ngayon aasa bang maibabalik ang kahapon?
```

**[Chorus]**

```
E                                       Asus2
Kahit sandali, palayain ang pusong di mapigil
                          F#m
Sana'y tayong dalawa sa huling pagkakataon
                  Asus2   Am
Na ika'y magiging akin
```

**[Verse 3]**

```
C#m7
         Asus2                  C#m7
Hindi matigil ang gulo sa aking isip
   Asus2       Bsus4          C#m7
At para bang walang kasing sakit
     Asus2               C#m7
Alaala mong hindi ko malimutan
      Asus2       Bsus4
Oras lang ang may alam
```

**[Refrain]**

```
     F#m          G#m          Asus2
Kung darating din ang gabing walang pipigil sa 'tin
     F#m            G#m         Asus2         Am
Kung hindi ngayon, aasa bang maibabalik ang kahapon
```

**[Chorus]**

```
E                                      Asus2
Kahit sandali palayain ang pusong di mapigil
                          F#m
Sana'y tayong dalawa sa huling pagkakataon
                 Asus2    Am
Na hindi na para sa 'tin
```

**[Bridge]**

```
      C#m           Bsus4
At sa bawat minuto ako'y di natuto
 Asus2
Ipilit mang iba, ako'y maghihintay sa 'yo
          C#m                Bsus4
Ikaw ang aking kapiling sa huling sandali
    Asus2                    Am
Kasalanan ba kung puso natin ang magwawagi?
```

**[Chorus]**

```
           E                            Asus2
Kahit sandali, palayain ang pusong di mapigil
                          F#m
Sana'y tayong dalawa sa huling pagkakataon
                 Asus2   Am
Na hindi na para sa 'tin
           E                              Asus2
Kahit sandali, patawarin ang pusong 'di tumigil
                         F#m
Para sating dalawa ang maling pagkakataon
                  Asus2 Am
Na ika'y magiging akin
```

---

## 5. Tatsulok — Bamboo
♩ **102 BPM** · Key of **B** (B minor)

> Key of B minor, as written on the source sheet.

**[Intro]**

```
Bm    C#    D    Em    F#    Bm
```

**[Verse 1]**

```
 Bm                      A
Totoy bilisan mo, bilisan mo ang takbo
 Bm                               G
Ilagan ang mga bombang nakatutok sa ulo mo
 Bm                       A
Totoy tumalon ka, dumapa kung kailangan
 G                     A              Bm
At baka tamaan pa ng mga balang ligaw

Bm    C#    D    Em    F#    Bm
```

**[Verse 2]**

```
Bm                     A
Totoy makinig ka huwag nang magpagabi
Bm
Baka pagkamalan pa't
G
Humandusay dyan sa tabi
Bm                     A
Totoy alam mo ba kung ano ang puno't dulo
G                      A            Bm
Ng di matapos tapos na kaguluhang ito
```

**[Pre-Chorus]**

```
   G                             F#m
Hindi pula't dilaw ang tunay na magkalaban
G                            F#m
Ang kulay at tatak ay di siyang dahilan

  Bm                     A
Hangga't marami ang lugmok sa kahirapan
  G           A
At ang hustisya ay para lang sa mayaman

F#    G     F#    D    C#
```

**[Chorus]**

```
      Bm                           F#m
Habang may tatsulok at sila ang nasa tuktok
 G   A                  Bm
Hindi matatapos itong gulo

Bm    C#    D    Em    F#    Bm
```

**[Verse 3]**

```
Bm                      A
Ngunit ng suminag, kay daming mga tao,
 Bm                               G
At ang dating munting bukid, ngayo'y sementeryo
 Bm                       A
Totoy kumilos ka, baliktarin ang tatsulok
 G                     A              Bm
Tulad ng dukha, nailagay mo sa tuktok
```

**[Pre-Chorus]**

```
   G                             F#m
Hindi pula't dilaw ang tunay na magkalaban
G                            F#m
Ang kulay at tatak ay di siyang dahilan
  Bm                     A
Hangga't marami ang lugmok sa kahirapan
  G           A
At ang hustisya ay para lang sa mayaman

F#    G     F#    D    C#
```

**[Chorus]**

```
   Bm                           F#m
Habang may tatsulok at sila ang nasa tuktok
 G    A                 Bm
Hindi matatapos itong gulo
   Bm                           F#m
Habang may tatsulok at sila ang nasa tuktok
 G    A                 Bm   (Bm 4 counts)
Hindi matatapos itong gulo
```

**[All Instruments]**

```
Bm  A  Bm  A  Bm
B  A  G  F#  G  A
Bm  A  Bm  A  Bm
B  A  G  F#  G  A  G
```

**[Pre-Chorus]**

*(Slower tempo (adagio))*

```
   G                             F#m
Hindi pula't dilaw ang tunay na magkalaban
G                            F#m
Ang kulay at tatak ay di siyang dahilan
  Bm                     A
Hangga't marami ang lugmok sa kahirapan
  G           A             F#m
At ang hustisya ay para lang sa mayaman
```

**[Chorus]**

```
   Bm (break)                        F#m
Habang may tatsulok at sila ang nasa tuktok
 G    A                 Bm
Hindi matatapos itong gulo
 Bm                           F#m
Habang may tatsulok at sila ang nasa tuktok

 G   A
Hindi matatapos
G   A
Di matatapos
```

**[Outro]**

```
G  A                Bm
Di matatapos itong gulo
```

---

## 6. This Love — Maroon 5
♩ **95 BPM** · Key of **G**

**[Intro]**

```
G       Cm   Fm       G7/D
```

**[Verse 1]**

```
G                       Cm
I was so high I did not recognize
                       Fm
The fire burning in her eyes
               G7/D
The chaos that controlled my mind
G                            Cm
whispered goodbye as she got on a plane
            Fm
Never to return again
                 G7/D
But always in my heart
```

**[Chorus]**

```
 Cm Fm        Bb        Eb
This love has taken its toll on me
 Cm          Fm      Bb           Eb
She said Goodbye too many times before

    Cm Fm        Bb          Eb
And her heart is breaking in front of me
 Cm       F            Ab              G
I have no choice cause I won't say goodbye anymore
```

**[Interlude]**

```
G Cm     Fm   G7/D
```

**[Verse 2]**

```
G                           Cm
I tried my best to feed her appetite
                 Fm
Keep her coming every night
                    G7/D
So hard to keep her satisfied
G                              Cm
Kept playing love like it was just a game
              Fm
Pretending to feel the same
                     G7/D
Then turn around and leave again (oh!)
```

**[Chorus]**

```
 Cm Fm        Bb         Eb
This love has taken its toll on me
 Cm          Fm      Bb           Eb
She said Goodbye too many times before
    Cm Fm        Bb          Eb
And her heart is breaking in front of me
 Cm       F             Ab             G
I have no choice cause I won't say goodbye anymore
```

**[Interlude]**

```
G   Cm   Fm   G7/D
```

**[Bridge]**

```
Fm
I'll fix these broken things
Ebmaj7
Repair your broken wings
G7                          Cm
And make sure everything's alright (it's alright)
Fm
My pressure on her hips
Ebmaj7
Sinking my fingertips

G
Into every inch of you
G7
Cause I know that's what you want me to do
```

**[Chorus]**

```
 Cm Fm         Bb        Eb
This love has taken its toll on me
 Cm          Fm      Bb           Eb
She said Goodbye too many times before
    Cm Fm         Bb         Eb
And her heart is breaking in front of me
 Cm       F             Ab             G
I have no choice cause I won't say goodbye anymore
```

**[Chorus]**

```
 Cm Fm         Bb        Eb
This love has taken its toll on me
 Cm          Fm      Bb           Eb
She said Goodbye too many times before
    Cm Fm         Bb         Eb
And my heart is breaking in front of me
Cm           F       Ab            G
She said Goodbye too many times before
```

**[Chorus]**

```
 Cm Fm         Bb        Eb
This love has taken its toll on me
 Cm          Fm      Bb           Eb
She said Goodbye too many times before
    Cm Fm         Bb         Eb
And her heart is breaking in front of me
 Cm       F             Ab             G
I have no choice cause I won't say goodbye anymore
```

---

## 7. Sabot-Sabot — Phylum
♩ **99 BPM** · Key of **C**

**[Intro]**

```
C F C F C F C F
```

**[Verse 1]**

```
C     F         Am            G
  Diba duwa-duwa ra man ning atoa
C         F                Am      G
  Nganung masakitan man ko kung magkuyog mong duha
C      F             Am       G
  Diba nagsabot nata kung mu abot na siya
F               G
  Taposon dayon ni natong relasyon na
```

**[Instrumental]**

```
C F C F C F C F
```

**[Verse 2]**

```
C    F         Am      G
  Og ako karon nakapangutana
C          F
  Nganong karon pa man ka
Am           G
  Na may uyab natang duha
C        F        Am       G
  Maikog na nuhon ko sa pagbiya na niya
Am(12x)                             Am-Am
  Kay gipaila-ila nako sa iyang mama
```

**[Chorus]**

```
                     F
    Maong ikaw akong gibiya-an
       G               C
    Na hina-ot nga makalimtan

          C(distort) Am
    Ang talagsaong kalipay
         G                   F   G
    Na kanimo ra matagamtaman
```

**[Instrumental]**

```
C F C F C F C F
```

**[Verse 3]**

```
C    F         Am      G
  Og ako karon nakapangutana
C          F
  Nganong karon pa man ka
Am           G
  Na may uyab natang duha
C        F        Am       G
  Maikog na nuhon ko sa pagbiya na niya
Am(12x)                             Am-Am
  Kay gipaila-ila nako sa iyang mama
```

**[Chorus]**

```
                     F
    Maong ikaw akong gibiya-an
       G                C
    Na hina-ot nga makalimtan
          C(distort) Am
    Ang talagsaong kalipay
         G                   F   G
    Na kanimo ra matagamtaman
```

**[Outro]**

```
F  Am   G     F
 Bisag asa ko taman
F Am        Am G F
 Palayo sa emong kiliran
F Am        G     F
 Halos kada lugar akong ma-abtan
F Am           Am       G          F
 Ikaw ra giyapon akong mahinumduman
```

**[Chorus x2]**

```
                     F
    Maong ikaw akong gibiya-an
       G                C
    Na hina-ot nga makalimtan
          C(distort) Am
    Ang talagsaong kalipay
         G                   F   G
    Na kanimo ra matagamtaman
```

---

## 8. Hindi Na Nga — This Band
♩ **66 BPM** · Key of **G**

**[Intro]**

```
G   Dsus4   Em7   Cadd9   x2
```

**[Verse 1]**

```
       G              Dsus4
Ang lahat ay nagbabago
  Em7                 Cadd9
Ganon din ang puso ko
    G                   Dsus4
Di alam kung paano aamin
      Em7                   Cadd9 (once)
Kung dapat bang sabihin to
```

**[Pre-Chorus]**

```
            Em7
Ngunit kailangan nang tapangan
      Dsus4
At sabihin ang nararapat
        Cadd9
Na hindi na nga
          Dsus4 (once)
Hindi na nga
```

**[Chorus]**

```
  G               Dsus4 (once, then mute)
Alam kong mali na
                       Em7
Pero di ko kayang bumitaw
Ika'y masasaktan
          Cadd9
Dahil pangako ko'y walang iwanan

  G               Dsus4
Alam kong huli na
                           Em7     Cadd9
Alam kong hindi na nga mahal
```

**[Verse 2]**

```
           G
Oh ilang beses din sinubukan
   Dsus4
Pinilit ang nararamdaman
      Em7
Pero kulang
     Cadd9
May kulang
```

**[Pre-Chorus]**

```
   G
Natatakot na malaman
   Dsus4
Natatakot na iyong huhusgahan
       Em7
Na hindi na nga
           Cadd9
Hindi na nga
```

**[Chorus]**

```
  G               Dsus4 (once, then mute)
Alam kong mali na
                       Em7
Pero di ko kayang bumitaw
Ika'y masasaktan
          Cadd9
Dahil pangako ko'y walang iwanan

  G               Dsus4
Alam kong huli na
                           Em7     Cadd9
Alam kong hindi na nga mahal
```

**[Solo]**

```
G   Dsus4   Em7   Cadd9   x2
```

**[Bridge]**

```
  G              Dsus4
Alam kong huli na
  Em7             Cadd9
Alam kong mali na
  G               Dsus4
Alam kong huli na
  Em7             Cadd9
Alam kong mali na
```

**[Chorus]**

```
  G               Dsus4 (once, then mute)
Alam kong mali na
                       Em7
Pero di ko kayang bumitaw
Ika'y masasaktan
          Cadd9
Dahil pangako ko'y walang iwanan

  G               Dsus4
Alam kong huli na
                           Em7        Cadd9
Alam kong hindi na nga mahal
```

**[Outro]**

```
G   Dsus4                        Em7 Cadd9
            Hindi na nga mahal
G   Dsus4                        Em7 Cadd9
            Hindi ka na mahal

       G               Dsus4
Ang lahat ay nagbabago
   Em7               Cadd9 (arpeggiate)
Ganon din ang puso ko
```

---

## 9. Narda — Kamikazee
♩ **120 BPM** · Key of **D**

**[Intro]**

```
D       Bm     G      A
D       Bm     G      A
```

**[Verse 1]**

```
D                       Bm
Tila ibon kung lumipad, Sumabay sa hangin ako'y napatingin
G                       A
Sa dalagang nababalot ng hiwaga.
D                  Bm
Mapapansin kaya sa dami ng yong ginagawa
G                        A
Kung kaagaw ko ang lahat may pag asa bang makilala ka
```

**[Chorus]**

```
D                    Bm
Awit na nananawagan, baka sakaling napakikinggan,
G                       A
Pag ibig na palaisipan sa kanta na lang idaraan
D                    Bm
Nag aabang sa langit, sa mga ulap sumisilip
G                     A
Sa likod ng mga tala, kahit sulyap lang darna
```

**[Verse 2]**

```
D                       Bm
Ang swerte nga naman ni ding, lagi ka nyang kapiling
G                       A
Kung ako sa kanya niligawan na kita
D                  Bm
Mapapansin kaya sa dami ng yong ginagawa
G                        A
Kung kaagaw ko ang lahat may pag asa bang makilala ka
```

**[Chorus]**

```
D                    Bm
Awit na nananawagan, baka sakaling napakikinggan,
G                       A
Pag ibig na palaisipan sa kanta na lang idaraan
D                    Bm
Nag aabang sa langit, sa mga ulap sumisilip
G                     A
Sa likod ng mga tala, kahit sulyap lang darna
```

**[Verse 3]**

```
D                       Bm
Tumalon kaya ako sa bangin, para lang iyong sagipin
G                       A
Ito ang tanging paraan para mayakap ka
D                  Bm
Darating kaya......sa dami ng ginagawa
G                        A
Kung kaagaw ko sila paano na kaya?
```

**[Chorus]**

```
D                    Bm
Awit na nananawagan, baka sakaling napakikinggan,
G                       A
Pag ibig na palaisipan sa kanta na lang idaraan
D                    Bm
Nag aabang sa langit, sa mga ulap sumisilip
G                     A
Sa likod ng mga tala, kahit sulyap lang darna

D                    Bm
Nag aabang sa langit, sa mga ulap sumisilip
G                     A
Sa likod ng mga tala, kahit sulyap lang darna
```

---

## 10. Saksi Ang Langit — December Avenue
♩ **85 BPM** · Key of **G**

**[Intro]**

```
Dmaj7 Gmaj7
Dmaj7 Gmaj7
```

**[Verse 1]**

```
            D
Nangangarap lang
                  Gmaj7
Habang ika'y pinagmamasdan
                D
Nagbibilang ng iyong hakbang
                     Gmaj7
Hanggang ika'y aking mahagkan
```

**[Pre-Chorus]**

```
                   Em
'Di sasayangin ang oras sa pag-ibig mo
                G
Mas pipiliin ko
                                    D
Ibigay lahat pati itong aking mundo
```

**[Chorus]**

```
                     Gmaj7
Halika't sumayaw sa ilalim ng bituin
                       D/F#
Habang ako'y nakatingin sa'yo
                      Em       G
Wala ng 'kong ibang mahihiling
                          D G
Saksi ang langit sa'tin
```

**[Verse 2]**

```
               D
'Wag kang magtaka
                       G
Kung bakit tayo pinag-isa
                D
'Wag kanang kabahan
                G
Ito'y hindi panaginip lang
```

**[Pre-Chorus]**

```
                  Em
'Di gumagalaw ang oras sa paligid ko
                   G
Pati itong mundo'y
                                    D
Tumitigil habang ako'y nasa tabi mo
```

**[Chorus]**

```
                     Gmaj7
Halika't sumayaw sa ilalim ng bituin
                       D/F#
Habang ako'y nakatingin sa'yo
                      Em       G
Wala ng 'kong ibang mahihiling
Saksi ang langit sa'tin
```

**[Refrain]**

```
D              G
  Oh-oh, oh-oh-oh
                Em
Oh-oh, oh-oh-oh
                G
Oh-oh, oh-oh-oh
                D
Oh-oh, oh-oh-oh
Saksi ang langit
Saksi ang langit sa'tin
G
  Saksi ang langit
Saksi ang langit sa'tin
Em
   Saksi ang langit
Saksi ang langit sa'tin
G
    Saksi ang langit
```

**[Pre-Chorus]**

```
                  Em
'Di gumagalaw ang oras sa paligid ko
                   G
Pati itong mundo'y
                                    D
Tumitigil habang ako'y nasa tabi mo
```

**[Chorus]**

```
                     Gmaj7
Halika't sumayaw sa ilalim ng bituin
                        D/F#
Habang ako'y nakatingin sa'yo
                      Em        G
Wala ng 'kong ibang mahihiling
                        D
Saksi ang langit sa'tin (Saksi ang langit)
                     Gmaj7
Halika't sumayaw sa ilalim ng bituin
                      D/F#
Habang ako'y nakadikit sa'yo
                     Em       G
Wala na'kong ibang mahihiling
                 D
Saksi ang langit
```

---

## 11. Pangako — Cueshé
♩ **120 BPM** · Key of **F**

**[Intro]**

```
F (x5)
```

**[Verse 1]**

```
F
  Kislap ng yong mga mata
Ako'y iyong nadadala
                          Bb
Parang anghel ang yong ganda
                F
Di maiwasan hahanap-hanapin ka
 F
O kay tamis ng yong mga ngiti
Ako'y iyong naaakit
                      Bb
Tulad ng rosas nakakaaliw
                            C
Di mapigilang mabighani sa iyo
```

**[Chorus 1]**

```
   F
At hindi ko hahayaan na
 Am
ika'y mawawala
     Bb
Pipilitin ko ang puso
        F
mong mahulog sa akin
```

**[Verse 2]**

```
F
    Pagsapit ng gabi
Sa isip ay ikaw pa rin
                          Bb
Mga larawan mo sa aking tabi
                C
Na laging nakamasid
```

**[Chorus 1]**

```
   F
At hindi ko hahayaan na
 Am
ika'y mawawala
     Bb
Pipilitin ko ang puso
        F
mong mahulog sa akin
```

**[Chorus 2]**

```
   F
At hinding-hindi ka
                 Am
magaalinlangan pangako ito
     Bb                    F
Gagawin ang lahat para sa iyo
```

**[Bridge]**

```
C            Bb Bb Dm
  Oh woh woh hoh
C             Bb C
  Oh woh wohh wohh
```

**[Guitar Solo]**

```
F  Am  Bb  F
```

**[Chorus 1]**

```
   F
At hindi ko hahayaan na
 Am
ika'y mawawala
     Bb
Pipilitin ko ang puso
        F
mong mahulog sa akin
```

**[Chorus 2]**

```
   F
At hinding-hindi ka
                 Am
magaalinlangan pangako ito
     Bb                    F
Gagawin ang lahat para sa iyo
```

**[Outro]**

```
F  F (hold)
```

---

## 12. Ang Huling El Bimbo — Eraserheads
♩ **90 BPM** · Key of **G**

**[Intro]**

```
G   A7      C        G   x2
```

**[Verse 1]**

```
(G)                A7
Kamukha mo si Paraluman,
C                      G
  Nung tayo ay bata pa.
G                         A7
  At ang galing-galing mo sumayaw,
      C               G
Mapa boogie man o cha-cha.
            G   A7
Ngunit ang paborito,
       C              G
Ay pagsayaw mo ng el bimbo.
         G          A7
Nakakaindak, nakakaaliw,
          C        G
Nakakatindig balahibo.
```

**[Pre-Chorus 1]**

```
Em                  G            C             D
   Pagkagaling sa skwela ay didiretso na sa inyo,
Em              G             C         D
   At buong maghapon ay tinuturuan mo ako.
```

**[Chorus]**

```
      G          A7
Magkahawak ang ating kamay,
      C             G
At walang kamalay-malay.
         G          A7
Na tinuruan mo ang puso ko,
     C        G
Na umibig ng tunay.
```

**[Verse 2]**

```
(G)                      A7
Naninigas ang aking katawan,
    C              G
Pagumikot na ang plaka.
G                   A7
  Patay sa kembot ng bewang mo,
         C                 G
At ang pungay ng iyong mga mata.
       G        A7
Lumiliwanag ang buhay,
         C             G
Habang tayo'y magkaakbay.
           G            A7
At dahan-dahang dumudulas,
           C                  G
Ang kamay ko sa makinis mong braso.
```

**[Pre-Chorus 2]**

```
Em        G              C           D
   Sana noon pa man ay sinabi na sa iyo,
Em                G           C            D
   Kahit hindi na uso ay ito lang ang alam ko.
```

**[Chorus]**

```
      G          A7
Magkahawak ang ating kamay,
      C             G
At walang kamalay-malay.
         G          A7
Na tinuruan mo ang puso ko,
     C        G
Na umibig ng tunay.
```

**[Bridge]**

```
          G
La la la la
   A7
La la
    C
La la
         G
La la la la
```

**[Verse 3]**

```
(G)                     A7
Lumipas ang maraming taon,
C                  G
  Di na tayo nagkita.
G                           A7
  Balita ko'y may anak ka na,
    C             G
Ngunit walang asawa.
     G         A7        C
Tagahugas ka raw ng pinggan
          G
Sa may Ermita.
            G        A7
At isang gabi nasagasaan,
              C           G
Sa isang madilim na eskinita.
```

**[Pre-Chorus 3]**

```
Em              G            C            D
   Lahat ng pangarap ko'y bigla lang natunaw,
Em                  G          C          D
   Sa panaginip na lang pala kita maisasayaw.
```

**[Chorus]**

```
      G          A7
Magkahawak ang ating kamay,
      C             G
At walang kamalay-malay.
         G          A7
Na tinuruan mo ang puso ko,
     C        G
Na umibig ng tunay.
```

**[Chorus]**

```
      G          A7
Magkahawak ang ating kamay,
      C             G
At walang kamalay-malay.
        G           A7
Na tinuruan mo ang puso ko,
     C        G
Na umibig ng tunay.
```

**[Coda]**

```
          G
La la la la
   A7
La la
    C
La la
         G
La la la la
```

---

## 13. Ulan — Cueshé
*Half Empty, Half Full*
♩ **~72 BPM** · Key of **B**

**[Intro]**

```
B D# x2
B D# G#m E
```

**[Verse 1]**

```
B                F#
Lagi na lang umuulan
B                   F#
Parang walang katapusan
          C#        E
Tulad ng paghihirap ko ngayon
      B          D#
Parang walang humpay
        G#m
Sa kabila ng lahat
          G
Ng aking pagsisikap
      B
Na limutin ka
   F#             B D# G#m E
Ay di pa rin magawa
```

**[Verse 2]**

```
B                  F#
Hindi naman ako tanga
B                  F#
Alam ko na wala ka na
       C#            E
Pero mahirap lang na tanggapin
   B         D#
Di na kita kapiling
       G#m
Iniwan mo akong
     G
Nag iisa
      B
Sa gitna ng dilim
     F#                 B     F#   E
At basang basa pa sa ulan
```

**[Chorus]**

```
B                D#
Pero wag mag alala
       G#m          C#7
Di na kita gagambalain
           C#m
Alam ko namang ngayong
      E                 B  F#  E
May kapiling ka ng iba
B                       D#
Tanging hiling ko sa 'yo
     G#m        C#7
Na tuwing umuulan
            C#m
Maalala mo sanang may
   E             B D# G#m C# C#m F# B (Ad Lib)
Nagmamahal sa 'yo, oh, oh, oh.....
```

**[Verse 3]**

```
B                 F#
Lagi na lang umuulan
B                  F#
Parang walang katapusan
           C#           E
Tulad ng paghihirap ko ngayon
      B         D#
Parang walang humpay
       G#m
Iniwan mo akong
    G
Nag iisa
      B
Sa gitna ng dilim
     F#                   B  F#    E
At basang basa pa sa ulan
```

**[Chorus]**

```
B                D#
Pero wag mag alala
       G#m         C#
Di na kita gagambalain
           C#m
Alam ko namang ngayong
      E               B  F#   E
May kapiling ka ng iba
B                     D#
Tanging hiling ko sa 'yo
     G#m        C#
Na tuwing umuulan
            C#m
Maalala mo sanang may
   E            B   F#   E
Nagmamahal sa 'yo ako
```

**[Outro]**

```
B     F#
La la la la la
G#m   F#
La la la la la
A     E     B
La la la la la....
```

---

## 14. Sine Sine — Missing Filemon
♩ **90 BPM** · Key of **A**

**[Intro]**

```
D B E       E7
```

**[Verse 1]**

```
A       C#7            F#m
Sinesine wala tay laing lingaw
  A7
Kandila luyo sa habol
D                Dm
Katawang binayran og pisong kinawat
A              E
Sa gubaong pitakang lola
A        C#7
Anino sa mga artistang papel
  A7
Gihinganlan tag si Pedro'g
D                 Dm
Sabel Sila'ng bida niadtong estorya
A                E
Sa gugma nga way katumanan
```

**[Chorus]**

```
A          C#7        F#m
Sine..sinesine sa bata pa
A7                 D
Di na unta matapos pa
  C#m    F#m    Bm         E
Bisan pa man sa pagdagan sa panahon
A          C#7        F#m
Lantawon mga eksena nga molabay
A7                 D
Tanang tawo makasakay

C#m   F#m    Bm         E
Saksihan ta ang pagdagan sa panahon

D B7 E
panahon..
```

**[Verse 2]**

```
A       C#7            F#m
Sigesigeha lang imong paglakaw
  A7
Ay'g kahadlok may kahayag
D                Dm
Modan-ag sa dalang mangitngit
  A                      E
Lakip na ang langit daw lapad nga adlaw
A       C#7            F#m
Ang kinabuhi sugilanong hiwi
  A7
Kalipay kasakit ug kalami
D                Dm
Silang bida niining salida
A                      E
Sa gugma nga way katumanan
```

**[Chorus]**

```
A          C#7         F#m
Sine..sinesine sa bata pa
A7                   D
Di na unta matapos pa
  C#m    F#m      Bm       E
Bisan pa man sa pagdagan sa panahon
A          C#7         F#m
Lantawon mga eksena nga molabay
A7                   D
Tanang tawo makasakay
C#m   F#m      Bm        E
Saksihan ta ang pagdagan sa panahon

D B7 E
panahon..
```

**[Instrumental]**

```
A      C#7   F#m    A7     D     Dm     A      E
```

**[Chorus]**

```
A         C#7         F#m
Sine..sinesine sa bata pa
A7                 D
Di na unta matapos pa
 C#m   | F#m   |  Bm         E
Bisan pa man sa pagdagan sa panahon
A         C#7         F#m
Lantawon mga eksena nga molabay
A7                 D
Tanang tawo makasakay
C#m   | F#m   |  Bm         E
Saksihan ta ang pagdagan sa panahon
```

---

## 15. Nobela — Join the Club
♩ **80 BPM** · Key of **E**

**[Intro]**

```
D# Gm        D# Gm G#
```

**[Verse]**

```
G#          D#
ngumiti kahit na napipilitan

G#                D#
kahit pa sinasadya
G#             D#
mo akong masaktan paminsan-minsan
G#                 A# (break)
bawat sandali na lang
G#              D#
tulad mo ba akong nahihirapan
G#             D#
lalo't naiisip ka
G#             D#
di ko na kaya pang makalimutan
C#                 A#
bawat sandali na lang
```

**[Chorus]**

```
    G#           A#
at aalis magbabalik
      D#         Cm
at uuliting sabihin
       G#         A#
na mahalin kat sambitin
         Gm      Cm
kahit muli masaktan
         G#
sa pag-alis
ako'y magbabalik
       G#m A#
sana naman
```

**[Verse]**

```
G#              D#
sa isang marikit na alaala
G#              D#
pangitahing kay ganda
G#              D#
sana ngay pagbigyan
G#
na ng tadhana
                 A#
bawat sandali na lang
G#              D#
sumabay sa biglang pagkabahala
G#              D#
lumabis ang pagtataka
G#              D#
tunay na pagsintang di alintana
C#                 A#
bawat sandali na lang
```

**[Chorus]**

```
    G#           A#
at aalis magbabalik
      D#         Cm
at uuliting sabihin
       G#         A#
na mahalin kat sambitin
         Gm      Cm
kahit muli masaktan
         G#
sa pag-alis
ako'y magbabalik
       G#m
sana naman
```

**[Solo 1]**

```
C#M7 A#m9 F#M7 G# x2 (break)
```

**[Solo 2]**

```
F# F#m C#M7 C#7
F# F#m G#
```

**[Bridge]**

```
    F#          C#
ngumiti kahit na napipilitan
F#              C#
kahit pa sinasadya
F#             C#
mo akong masaktan paminsan-minsan
B                  G#
bawat sandali na lang
```

**[Chorus]**

```
     F#           G#
at aalis magbabalik
     C#          A#m
at uuliting sabihin
     F#           G#
na mahalin kat sambitin
      Fm       A#m
kahit muli masaktan
     F#
sa pag-alis
ako'y magbabalik
      F#m F# G#
sana naman
```

---
