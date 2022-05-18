# HH2.0

heimasíða fyrir hannesarholt skrifuð aftur og, vonandi, beturumbætt með **nextjs**, **react** og **prismic**

## plan

búa til grunn sem hægt er að nota til að endurgera alla virkni og allt look af gömlu síðunni  
skipting yfir í nýju síðuna á að verða tiltölulega seamless

## stóru hlutirnir

**viðburðir**
> að geta auðveldlega bætt við og sýnt viðburði á síðunni er stærsta hlutverk hennar  
> það er útfært með prismic headless CMS og búinn verður til account til að deila á milli fólks

**fréttir**
> fréttirnar eru notaðar minna en viðburðirnir en eru þó stór partur af síðunni og fá mjög svipaða meðferð

**matseðill**
> það verður að vera hægt að skoða matseðil á ehv góðann máta  
> til að byrja með má vera bara pdf til að einfalda en það væri gott að geta flokkað og búið til á prismic í staðinn

**dependency súpa**
> ég mun gera allt í krafti mínum til að koma í veg fyrir að upp komi einhverskonar dependency súpa

## todo:
### header
- [ ] dropdown fyrir nestaða lista á báðum skölum

### gögn
*byrja að flytja yfir alvöru gögn af gömlu síðunni til að sjá hvort hún passi og hverju þarf að bæta við*

[**veitingahús**](pages%5Cveitingahus)
- [x] yfirlit 
- [x] matseðill
  - [x] brunch
  - [x] hádegisseðill
  - [x] veislumatur **ATH: hér þyrfti (þegar það er tilbúið) að nota margra mynda slice**
- [x] matarstefna
- [x] gjafabréf


**salir** 
- [x] yfirlit
- [x] hljóðberg
- [x] rauða herbergið
- [x] hvíta herbergið
- [x] arinstofa
- [x] baðstofuloftið
- [x] veitingastofur
- [ ] *bæta við embedded dótinu til að skoða sal á google maps*


**heimili heimsmarkmiðana** 
- [ ] yfirlit
- [ ] heimsmarkmiðin 17
- [ ] hvað getur þú gert 
- [ ] kennsla
- [ ] upplýsingar
- [ ] tillögur


**hannesarholt** 
- [ ] hannes hafstein
  - [ ] önnur heimili
  - [ ] ljóðið
  - [ ] heimildarmynd
- [ ] sögulegur fróðleikur
  - [ ] 100 ára saga (port)
  - [ ] 100 ára afmæli
  - [ ] áfangar í sögu reykjavíkur
  - [ ] reykjavík 1926
  - [ ] þingholtin
  - [ ] ýmis fróðleikur


**fréttir** 
- [ ] yfirlit
- [ ] einstakar fréttir 

**viðburðir** 
- [ ] yfirlit
- [ ] yfirlit dagatal ?
- [x] einstakir viðburðir


### slices, types og form
- [ ] forsíðuformið
- [ ] linked / embedded slice
- [ ] myndbandaslice
- [x] margar myndir slice **ATH: það er "komið" má kíkja betur á seinna**

---

## grófara todo: 
- [ ] fréttasíður
  - [ ] yfirlit
  - [ ] einstakar fréttir
- [ ] viðburðarsíður
  - [ ] yfirlit
  - [x] einstakir viðburðir
