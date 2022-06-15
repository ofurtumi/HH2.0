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

[**veitingahús**](pages/veitingahus)
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
- [x] yfirlit
- [ ] heimsmarkmiðin 17
- [ ] hvað getur þú gert 
- [ ] kennsla
- [ ] upplýsingar
- [ ] tillögur


**hannesarholt** 
- [x] hannes hafstein
  - [x] æviágrip
  - [x] önnur heimili
  - [x] ljóðið
  - [x] heimildarmynd
- [ ] sögulegur fróðleikur
  - [x] 100 ára saga (port) */hannesarholt/_100ar/index.html*
  - [x] 100 ára afmæli
  - [x] áfangar í sögu reykjavíkur
  - [x] reykjavík 1926
  - [ ] þingholtin
    - [ ] þetta er big ting, gleymdi að þetta eru svona 40 undirsíður
- [x] markmið
- [x] skipulagsskrá
- [x] faðmlag fortíðar
- [x] stjórn og menningarráð
- [x] starfsfólk
- [x] hollvinir
  - [x] síðan


**fréttir** 
- [x] yfirlit
- [x] einstakar fréttir 

**viðburðir** 
- [x] yfirlit
- [x] einstakir viðburðir


### slices, types og form
- [x] forsíðuformið
- [ ] link list slice (fyrir header og allskonar menu)
- [x] linked slice 
- [x] embedded video slice
- [x] myndbandaslice
- [x] margar myndir slice **ATH: það er "komið" má kíkja betur á seinna**


# IM BACK BABY
---

kom heim í dag frá prima, endurnærður og til í þetta   
**hér er listi yfir hluti sem þarf að klára fyrir prod**  
*mjög mikið stiklað á stóru*
1. færa gögn yfir af gömlu síðunni, aðalega fréttir og viðburði
2. færa kóðann frá mínum host account á vercel yfir á tæknistjóri account
3. færa prismic aðganginn yfir á tæknistjóri account

**hlutir sem mega bíða eftir prod**
1. smávæginlegar fínpússanir
   1. matseðlar flottari
   2. samstarfsverkefni port
   3. heimsmarkmið port
   4. linkar þannig hægt sé að bæta við og færa án mín 