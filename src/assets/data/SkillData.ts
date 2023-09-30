import html from '../img/progLogo/html.png';
import css from '../img/progLogo/css.png';
import js from '../img/progLogo/js.png';
import ts from '../img/progLogo/ts.png';
import dart from '../img/progLogo/dart.png';
import java from '../img/progLogo/java.png';
import py from '../img/progLogo/py.png';
import php from '../img/progLogo/php.png';
import react from '../img/progLogo/react.png';
import flutter from '../img/progLogo/flutter.png';
import ci from '../img/progLogo/ci.png';
import mysql from '../img/progLogo/mysql.png';
import git from '../img/progLogo/git.png';
import macos from '../img/progLogo/apple.png';
import win from '../img/progLogo/win.png';
import linux from '../img/progLogo/linux.png';
import nodejs from '../img/progLogo/nodejs.png';
import rabbitmq from '../img/progLogo/rabbitmq.png';
import firebase from '../img/progLogo/firebase.png';
import express from '../img/progLogo/express.png';
import nodejsbold from '../img/progLogo/nodejsbold.png';
import mongodb from '../img/progLogo/mongo.png';
import django from '../img/progLogo/django.png';

enum Title {
    html = "HTML",
    css = "CSS",
    js = "JavaScript",
    ts = "TypeScript",
    dart = "Dart",
    java = "Java",
    py = "Python",
    php = "PHP",
    react = "React",
    flutter = "Flutter",
    ci = "CodeIgniter 3",
    mysql = "MySQL",
    git = "Git",
    macos = "macOS",
    win = "Window",
    linux = "Linux",
    nodejs = "NodeJS",
    rabbitmq = "RabbitMQ",
    firebase = "Firebase",
    express = "Express",
    nodejsbold = "NodeJS",
    mongodb = "MongoDB",
    django = "Django",
}

enum Path {
    html = "https://www.w3schools.com/html/",
    css = "https://www.w3schools.com/css/",
    js = "https://www.w3schools.com/js/",
    ts = "https://www.typescriptlang.org",
    dart = "https://dart.dev",
    java = "https://www.w3schools.com/java/",
    py = "https://www.w3schools.com/python/",
    php = "https://www.w3schools.com/php/",
    react = "https://reactjs.org",
    flutter = "https://flutter.dev",
    ci = "https://www.codeigniter.com",
    mysql = "https://www.w3schools.com/sql/",
    git = "https://git-scm.com",
    macos = "https://www.apple.com/macos/",
    win = "https://www.microsoft.com/th-th/software-download/",
    linux = "https://www.linux.org/pages/download/",
    nodejs = "https://nodejs.org/en/",
    rabbitmq = "https://www.rabbitmq.com",
    firebase = "https://firebase.google.com",
    express = 'https://expressjs.com',
    nodejsbold = "https://nodejs.org/en/",
    mongodb = "https://www.mongodb.com/",
    django = "https://www.djangoproject.com/",
}

export const ProgLanData = [
     {//0
         name: Title.html,
         icon: html,
         link: Path.html,
     },
     {//1
         name: Title.css,
         icon: css,
         link: Path.css,
     },
     {//2
         name: Title.js,
         icon: js,
         link: Path.js,
     },
     {//3
         name: Title.ts,
         icon: ts,
         link: Path.ts,
     },
     {//4
         name: Title.dart,
         icon: dart,
         link: Path.dart,
     },
     {//5
         name: Title.java,
         icon: java,
         link: Path.java,
     },
     {//6
         name: Title.py,
         icon: py,
         link: Path.py,
     },
     {//7
         name: Title.php,
         icon: php,
         link: Path.php,
     },
 ]

export const EtcData = [
    {//0
        name: Title.react,
        icon: react,
        link: Path.react,
    },
    {//1
        name: Title.flutter,
        icon: flutter,
        link: Path.flutter,
    },
    {//2
        name: Title.express,
        icon: express,
        link: Path.express,
    },
    {//3
        name: Title.ci,
        icon: ci,
        link: Path.ci,
    },
    {//4
        name: Title.django,
        icon: django,
        link: Path.django,
    },
    {//5
        name: Title.mysql,
        icon: mysql,
        link: Path.mysql,
    },
    {//6
        name: Title.mongodb,
        icon: mongodb,
        link: Path.mongodb,
    },
    {//7
        name: Title.git,
        icon: git,
        link: Path.git,
    },
]

export const OsData = [
    {//0
        name: Title.macos,
        icon: macos,
        link: Path.macos
    },
    {//1
        name: Title.win,
        icon: win,
        link: Path.win,
    },
    {//2
        name: Title.linux,
        icon: linux,
        link: Path.linux,
    },
]

export const OtherData = [
    {//0
        name: Title.nodejs,
        icon: nodejs,
        link: Path.nodejs,
    },
    {//1
        name: Title.rabbitmq,
        icon: rabbitmq,
        link: Path.rabbitmq,
    },
    {//2
        name: Title.firebase,
        icon: firebase,
        link: Path.firebase,
    }
]

export const RudData = [
    {
        lan: ProgLanData[5]
    }
]

export const CuddData = [
    {
        lan: ProgLanData[0]
    },
    {
        lan: ProgLanData[1]
    },
    {
        lan: ProgLanData[2]
    },
    {
        lan: EtcData[0]
    },
    {
        lan: EtcData[7]
    },
]

export const RooData = [
    {
        lan: ProgLanData[4]
    },
    {
        lan: EtcData[1]
    },
    {
        lan: EtcData[7]
    },
]

export const MasData = [
    {
        lan: ProgLanData[7]
    },
    {
        lan: EtcData[3]
    },
    {
        lan: EtcData[5]
    },
    {
        lan: OsData[2]
    },
]

export const EdaData = [
    {
        lan : ProgLanData[3]
    },
    {
        lan: EtcData[2]
    },
    {
        lan: EtcData[5]
    },
    {
        lan: OtherData[0]
    },
    {
        lan: OtherData[1]
    },
]

export const DreData = [
    {
        lan: ProgLanData[4]
    },
    {
        lan: EtcData[1]
    },
    {
        lan: OtherData[2]
    },
    {
        lan: EtcData[7]
    },
]

export const ChaData = [
    {
        lan: ProgLanData[4]
    },
    {
        lan: EtcData[1]
    },
    {
        lan: OtherData[2]
    },
    {
        lan: EtcData[7]
    },
]

export const UniData = [
    {
        lan: ProgLanData[0]
    },
    {
        lan: ProgLanData[1]
    },
    {
        lan: ProgLanData[2]
    },
]

export const DesData = [
    {
        lan: ProgLanData[6]
    }
]

export const ArcData = [
    {
        lan: ProgLanData[0]
    },
    {
        lan: ProgLanData[1]
    },
    {
        lan: ProgLanData[2]
    },
]