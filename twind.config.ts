import { Options } from "$fresh/plugins/twind.ts";
import * as colors from 'twind/colors'

export default {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
      serif: ["Times", "serif"],
    },
    colors: {
      ...colors,
      "slate": '#1e293b'
    }
  },
  mode:'strict'
} as Options;
