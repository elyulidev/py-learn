
import { m1WhatIs } from './modulo-1/what-is';
import { m1Install } from './modulo-1/install';
import { m1Hello } from './modulo-1/hello';
import { m1Syntax } from './modulo-1/syntax';
import { m1Vars } from './modulo-1/vars';
import { m1Reserved } from './modulo-1/reserved';
import { m1Scope } from './modulo-1/scope';
import { m1Exec } from './modulo-1/exec';
import { m1Typing } from './modulo-1/typing';
import { m1Builtin } from './modulo-1/builtin';
import { m1Unpacking } from './modulo-1/unpacking';

import { m2If } from './modulo-2/if';
import { m2For } from './modulo-2/for';
import { m2Range } from './modulo-2/range';
import { m2While } from './modulo-2/while';
import { m2Switch } from './modulo-2/switch';
import { m2Match } from './modulo-2/match';
import { m2Break } from './modulo-2/break';
import { m2Continue } from './modulo-2/continue';
import { m2Zip } from './modulo-2/zip';
import { m2Enumerate } from './modulo-2/enumerate';
import { m2ListComp } from './modulo-2/listcomp';
import { m2Iterators } from './modulo-2/iterators';

import { m3Int } from './modulo-3/int';
import { m3Bool } from './modulo-3/bool';
import { m3Float } from './modulo-3/float';
import { m3Complex } from './modulo-3/complex';
import { m3Str } from './modulo-3/str';
import { m3List } from './modulo-3/list';
import { m3Set } from './modulo-3/set';
import { m3Tuple } from './modulo-3/tuple';
import { m3Dict } from './modulo-3/dict';
import { m3Frozenset } from './modulo-3/frozenset';
import { m3Castings } from './modulo-3/castings';
import { m3Collections } from './modulo-3/collections';
import { m3Mutability } from './modulo-3/mutability';

import { m4Assign } from './modulo-4/assign';
import { m4Arith } from './modulo-4/arith';
import { m4Rel } from './modulo-4/rel';
import { m4Log } from './modulo-4/log';
import { m4Bitwise } from './modulo-4/bitwise';
import { m4Identity } from './modulo-4/identity';
import { m4Member } from './modulo-4/member';
import { m4Walrus } from './modulo-4/walrus';

import { m5Funcs } from './modulo-5/funcs';
import { m5Pass } from './modulo-5/pass';
import { m5Args } from './modulo-5/args';
import { m5Annot } from './modulo-5/annot';
import { m5Lambda } from './modulo-5/lambda';
import { m5Recur } from './modulo-5/recur';
import { m5Deco } from './modulo-5/deco';
import { m5Gen } from './modulo-5/gen';
import { m5Coro } from './modulo-5/coro';
import { m5Cache } from './modulo-5/cache';
import { m5FuncProg } from './modulo-5/funcprog';

import { m6Oop } from './modulo-6/oop';
import { m6Methods } from './modulo-6/methods';
import { m6Inh } from './modulo-6/inh';
import { m6Prop } from './modulo-6/prop';
import { m6Dunder } from './modulo-6/dunder';
import { m6Override } from './modulo-6/override';
import { m6Abc } from './modulo-6/abc';
import { m6Abstract } from './modulo-6/abstract';
import { m6Coupling } from './modulo-6/coupling';
import { m6Class } from './modulo-6/class';
import { m6Encap } from './modulo-6/encap';
import { m6Poly } from './modulo-6/poly';
import { m6Cohesion } from './modulo-6/cohesion';

import { m7Ex } from './modulo-7/ex';
import { m7Assert } from './modulo-7/assert';
import { m7Define } from './modulo-7/define';
import { m7Ctx } from './modulo-7/ctx';

import { m8Read } from './modulo-8/read';
import { m8Write } from './modulo-8/write';

import { m9Math } from './modulo-9/math';
import { m9Numpy } from './modulo-9/numpy';
import { m9Plt } from './modulo-9/plt';

export const STATIC_LESSONS: Record<string, string> = {
  // --- MÓDULO 1 ---
  'm1-what-is': m1WhatIs,
  'm1-install': m1Install,
  'm1-hello': m1Hello,
  'm1-syntax': m1Syntax,
  'm1-vars': m1Vars,
  'm1-reserved': m1Reserved,
  'm1-scope': m1Scope,
  'm1-exec': m1Exec,
  'm1-typing': m1Typing,
  'm1-builtin': m1Builtin,
  'm1-unpacking': m1Unpacking,

  // --- MÓDULO 2 ---
  'm2-if': m2If,
  'm2-for': m2For,
  'm2-range': m2Range,
  'm2-while': m2While,
  'm2-switch': m2Switch,
  'm2-match': m2Match,
  'm2-break': m2Break,
  'm2-continue': m2Continue,
  'm2-zip': m2Zip,
  'm2-enumerate': m2Enumerate,
  'm2-listcomp': m2ListComp,
  'm2-iterators': m2Iterators,

  // --- MÓDULO 3 ---
  'm3-int': m3Int,
  'm3-bool': m3Bool,
  'm3-float': m3Float,
  'm3-complex': m3Complex,
  'm3-str': m3Str,
  'm3-list': m3List,
  'm3-set': m3Set,
  'm3-tuple': m3Tuple,
  'm3-dict': m3Dict,
  'm3-frozenset': m3Frozenset,
  'm3-castings': m3Castings,
  'm3-collections': m3Collections,
  'm3-mutability': m3Mutability,

  // --- MÓDULO 4 ---
  'm4-assign': m4Assign,
  'm4-arith': m4Arith,
  'm4-rel': m4Rel,
  'm4-log': m4Log,
  'm4-bitwise': m4Bitwise,
  'm4-identity': m4Identity,
  'm4-member': m4Member,
  'm4-walrus': m4Walrus,

  // --- MÓDULO 5 ---
  'm5-funcs': m5Funcs,
  'm5-pass': m5Pass,
  'm5-args': m5Args,
  'm5-annot': m5Annot,
  'm5-lambda': m5Lambda,
  'm5-recur': m5Recur,
  'm5-deco': m5Deco,
  'm5-gen': m5Gen,
  'm5-coro': m5Coro,
  'm5-cache': m5Cache,
  'm5-funcprog': m5FuncProg,

  // --- MÓDULO 6 ---
  'm6-oop': m6Oop,
  'm6-methods': m6Methods,
  'm6-inh': m6Inh,
  'm6-prop': m6Prop,
  'm6-dunder': m6Dunder,
  'm6-override': m6Override,
  'm6-abc': m6Abc,
  'm6-abstract': m6Abstract,
  'm6-coupling': m6Coupling,
  'm6-class': m6Class,
  'm6-encap': m6Encap,
  'm6-poly': m6Poly,
  'm6-cohesion': m6Cohesion,

  // --- MÓDULO 7 ---
  'm7-ex': m7Ex,
  'm7-assert': m7Assert,
  'm7-define': m7Define,
  'm7-ctx': m7Ctx,

  // --- MÓDULO 8 ---
  'm8-read': m8Read,
  'm8-write': m8Write,

  // --- MÓDULO 9 ---
  'm9-math': m9Math,
  'm9-numpy': m9Numpy,
  'm9-plt': m9Plt
};
