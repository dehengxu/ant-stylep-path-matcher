# Ant-style Path Matcher

An implementation for Ant-style path patterns.
Part of this mapping code has been kindly borrowed from Apache Ant and Spring Framework.

The mapping matches URLs using the following rules:

? match one character
\* match zero or more characters
\*\* match zero or more directories in a path
{value} matches the regexp [a-z]+ as a path variable named "spring"

## Install

```
 npm i ant-style-path-matcher
```

## Usage

```
import AntPathMatcher from 'ant-path-matcher'

const matcher = new AntPathMatcher() ;

matcher.antPathMatch('/path/**/?z','/path/x/y/z/yz')
// true

matcher.antPathMatch('/abc/{id}/efg','/abc/1/efg')
// true

```
