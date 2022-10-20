var express = require('express');
var router = express.Router();
const anaSayfa=function(req, res, next)
  {
    res.render('anasayfa', { 
      "baslik": 'Anasayfa',
      "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan": "Civrdaki Mekanları Keşfet"
      },
    "mekanlar":[{
      "ad": "Dürümle",
      "adres": "İyaş AVM",
      "puan": "4",
      "mefase": "100m",
      "imkanlar": ["Tavuk Dürüm", "Adana Dürüm", "Soslu Dürüm"]
    },
    {
      "ad": "Mackbear",
      "adres": "İyaş AVM",
      "puan": "3",
      "mefase": "100m",
      "imkanlar": ["3.nesil Kahve", "çay", "pasta"]
    }
  ]
    });
  }
  const mekanBilgisi=function(req, res, next){
    res.render('mekanbilgisi', 
    {
      "baslik":"Mekan Bilgisi",
      "mekanBaslik":"Dürümle",
      "mekanDetay": {
        "ad":"Dürümle",
        "adres":"İyaş AVM",
        "puan":"4",
        "saatler":[
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"9:00",
            "kapanis":"23:00",
            "kapali": false
          },          
          {
            "gunler":"Cumartesi-Pazar",
            "acilis":"10:00",
            "kapanis":"22:00",
            "kapali": false
          }
        ],
        "imkanlar":["Tavuk Dürüm", "Adana Dürüm", "Soslu Dürüm"],
        "koordinatlar":{
          "enlem":"37.7",
          "boylam":"30.5"
        },
        "yorumlar":[
          {
            "yorumYapan":"Sinan",
            "puan":"2",
            "tarih":"20 Ekim 2022",
            "yorumMetni":"Çok Berbat"
          },
          {
            "yorumYapan":"Ali",
            "puan":"3",
            "tarih":"20 Ekim 2022",
            "yorumMetni":"eeh işte"
          }
        ]
      }
    });
  }
  const yorumEkle=function(req, res, next)
  {
    res.render('yorumekle', { title: 'Yorum ekle' });
  }

  


  module.exports = 
  {
    anaSayfa,mekanBilgisi,yorumEkle
  }