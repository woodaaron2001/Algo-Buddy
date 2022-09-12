import { algorithm } from './algorithm';

export const ALGORITHMS: algorithm[] = [
  { Id: 11, Category: 'PLL', Name: 'UbPERM', Moves:'L R L L2 U R B D\' U\' R\'',  VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 12, Category: 'PLL', Name: 'UaPERM', Moves:'L R L L2 U R B D\' U\' R\'',  VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 13, Category: 'PLL', Name: 'ZPERM',  Moves:'L R L L2 U R B D\' U\' R\'',  VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 14, Category: 'PLL', Name: 'AaPERM', Moves:'L R L L2 U R B D\' U\' R\'' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 15, Category: 'PLL', Name: 'AbPERM', Moves:'L R L L2 U R B D\' U\' R\'' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 16, Category: 'PLL', Name: 'JaPERM', Moves:'L R L L2 U R B D\' U\' R\'',  VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 17, Category: 'PLL', Name: 'JbPERM', Moves:'L R L L2 U R B D\' U\' R\'' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 18, Category: 'PLL', Name: 'VPERM',  Moves:'L R L L2 U R B D\' U\' R\'' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 19, Category: 'OLL', Name: 'JaPERM', Moves:'L R L L2 U R B D\' U\' R\'' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 20, Category: 'OLL', Name: 'JbPERM', Moves:'L R L L2 U R B D\' U\' R\'' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 21, Category: 'OLL', Name: 'VPERM',  Moves:'L R L L2 U R B D\' U\' R\'' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 22, Category: 'F2L', Name: 'JaPERM', Moves:'U U' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 23, Category: 'F2L', Name: 'JbPERM', Moves:'U U' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 24, Category: 'F2L', Name: 'VPERM',  Moves:'U U' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 25, Category: 'BEGINNER ALGORITHMS',  Name: 'JaPERM', Moves:'U U' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  { Id: 26, Category: 'BEGINNER ALGORITHMS',  Name: 'JbPERM', Moves:'U U' , VideoId: "test", VideoStart: 0, VideoEnd: 1, ImageUrl: "no", ShortNote: "helpme"},
  
];

export const MOVESET: string = 'RLUDBF'

export const CATEGORIES: string[] = [
    'PLL',
    'OLL',
    'F2L',
    'BEGINNER ALGORITHMS'
];