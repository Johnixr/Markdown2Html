// 主题样式
import editorial from "./markdown/editorial";
import songke from "./markdown/songke";
import swiss from "./markdown/swiss";
import journal from "./markdown/journal";
import pine from "./markdown/pine";
import marker from "./markdown/marker";
import devnote from "./markdown/devnote";
import magazine from "./markdown/magazine";
import report from "./markdown/report";
import quiet from "./markdown/quiet";
import custom from "./markdown/custom";

import content from "./content.md";

import atomOneDark from "./code/atomOneDark";
import atomOneLight from "./code/atomOneLight";
import github from "./code/github";
import monokai from "./code/monokai";
import vs2015 from "./code/vs2015";
import xcode from "./code/xcode";

import macAtomOneDark from "./macCode/macAtomOneDark";
import macAtomOneLight from "./macCode/macAtomOneLight";
import macGithub from "./macCode/macGithub";
import macMonokai from "./macCode/macMonokai";
import macVs2015 from "./macCode/macVs2015";
import macXcode from "./macCode/macXcode";

import basic from "./basic";

export default {
  basic,
  theme: {
    editorial,
    songke,
    swiss,
    journal,
    pine,
    marker,
    devnote,
    magazine,
    report,
    quiet,
    custom
  },
  code: {
    atomOneDark,
    atomOneLight,
    github,
    monokai,
    vs2015,
    xcode,
    macAtomOneDark,
    macAtomOneLight,
    macGithub,
    macMonokai,
    macVs2015,
    macXcode
  },
  content
};
