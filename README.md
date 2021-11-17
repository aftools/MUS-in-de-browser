# MUS-in-de-browser
MUS (Monetary Unit Sampling) in de browser  
Geldsteekproef in de browser

Poging om een geldsteekproef volgens de selectiemethode 'Cell-sampling' uit te voeren in de browser.  
Zodanig dat deze compatible is met bekende CAAT tools.

Uitdagingen:
- De populatie dataset (waarop getrokken moet worden) in de browser-omgeving brengen
- Random getallen genereren via een [LCG](https://en.wikipedia.org/wiki/Linear_congruential_generator) of [Mersenne Twister](https://en.wikipedia.org/wiki/Mersenne_Twister) algoritme
- De random getallen op de juiste wijze afpassen op de populatie -> getrokken records aanwijzen
