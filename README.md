![Diet Logo](http://i.imgur.com/AJYLmkz.jpg)

[![NPM](http://img.shields.io/npm/v/volta.js.svg?style=flat)](https://www.npmjs.org/package/volta.js)


[Volta.js](https://github.com/liamka/volta.js) is a tiny, fast library to increase speed of coding.
```html
<div class="margin-top-150 text-decoration-underline transform-rotate(7deg)">
    Test div block
</div>
```

## Install

NPM
```
npm install volta.js
```
Bower
```
bower install volta.js
```

and initialize
```html
<script>
    Volta.render({
        size: "px"
    });
</script>
```

## More examples

```html

<div class="background-size-cover">
    Example div block
</div>

<div class="border-top-10 font-size-24">
    Example div block
</div>

<div class="cursor-default">
    Example div block
</div>

<div class="float-left">
    Example div block
</div>

<div class="text-transform-uppercase padding-bottom-50">
    Example div block
</div>

<div class="transform-rotate(15deg)">
    Example div block
</div>

<div class="z-index-10">
    Example div block
</div>

```

see examples.


## Reference

| Property            | Description          | CSS          |
| :------------- | :------------- | :------------- |
| align-content    | Sets or returns the alignment between the lines inside a flexible container when the items do not use all available space | 3 |
| align-items    | Sets or returns the alignment for items inside a flexible container | 3 |
| align-self    | Sets or returns the alignment for selected items inside a flexible container | 3 |
| animation    | A shorthand property for all the animation properties below, except the animationPlayState property | 3 |
| animation-delay    | Sets or returns when the animation will start | 3 |
| animation-direction    | Sets or returns whether or not the animation should play in reverse on alternate cycles | 3 |
| animation-duration    | Sets or returns how many seconds or milliseconds an animation takes to complete one cycle | 3 |
| animation-fill-mode    | Sets or returns what values are applied by the animation outside the time it is executing | 3 |
| animation-iteration-count    | Sets or returns the number of times an animation should be played | 3 |
| animation-name    | Sets or returns a name for the @keyframes animation | 3 |
| animation-timing-function    | Sets or returns the speed curve of the animation | 3 |
| animation-play-state    | Sets or returns whether the animation is running or paused | 3 |
| background    | Sets or returns all the background properties in one declaration | 1 |
| background-attachment    | Sets or returns whether a background-image is fixed or scrolls with the page | 1 |
| background-color    | Sets or returns the background-color of an element | 1 |
| background-image    | Sets or returns the background-image for an element | 1 |
| background-position    | Sets or returns the starting position of a background-image | 1 |
| background-repeat    | Sets or returns how to repeat (tile) a background-image | 1 |
| background-clip    | Sets or returns the painting area of the background | 3 |
| background-origin    | Sets or returns the positioning area of the background images | 3 |
| background-size    | Sets or returns the size of the background image | 3 |
| backface-visibility    | Sets or returns whether or not an element should be visible when not facing the screen | 3 |
| border    | Sets or returns borderWidth, borderStyle, and borderColor in one declaration | 1 |
| border-bottom    | Sets or returns all the borderBottom* properties in one declaration | 1 |
| border-bottom-color    | Sets or returns the color of the bottom border | 1 |
| border-bottom-left-radius    | Sets or returns the shape of the border of the bottom-left corner | 3 |
| border-bottom-right-radius    | Sets or returns the shape of the border of the bottom-right corner | 3 |
| border-bottom-style    | Sets or returns the style of the bottom border | 1 |
| border-bottom-width    | Sets or returns the width of the bottom border | 1 |
| border-collapse    | Sets or returns whether the table border should be collapsed into a single border, or not | 2 |
| border-color    | Sets or returns the color of an element's border (can have up to four values) | 1 |
| border-image    | A shorthand property for setting or returning all the borderImage* properties | 3 |
| border-image-outset    | Sets or returns the amount by which the border image area extends beyond the border box | 3 |
| border-image-repeat    | Sets or returns whether the image-border should be repeated, rounded or stretched | 3 |
| border-image-slice    | Sets or returns the inward offsets of the image-border | 3 |
| border-image-source    | Sets or returns the image to be used as a border | 3 |
| border-image-width    | Sets or returns the widths of the image-border | 3 |
| border-left    | Sets or returns all the borderLeft* properties in one declaration | 1 |
| border-left-color    | Sets or returns the color of the left border | 1 |
| border-left-style    | Sets or returns the style of the left border | 1 |
| border-left-width    | Sets or returns the width of the left border | 1 |
| border-radius    | A shorthand property for setting or returning all the four border*Radius properties | 3 |
| border-right    | Sets or returns all the borderRight* properties in one declaration | 1 |
| border-right-color    | Sets or returns the color of the right border | 1 |
| border-right-style    | Sets or returns the style of the right border | 1 |
| border-right-width    | Sets or returns the width of the right border | 1 |
| border-spacing    | Sets or returns the space between cells in a table | 2 |
| border-style    | Sets or returns the style of an element's border (can have up to four values) | 1 |
| border-top    | Sets or returns all the borderTop* properties in one declaration | 1 |
| border-top-color    | Sets or returns the color of the top border | 1 |
| border-top-left-radius    | Sets or returns the shape of the border of the top-left corner | 3 |
| border-top-right-radius    | Sets or returns the shape of the border of the top-right corner | 3 |
| border-top-style    | Sets or returns the style of the top border | 1 |
| border-top-width    | Sets or returns the width of the top border | 1 |
| border-width    | Sets or returns the width of an element's border (can have up to four values) | 1 |
| bottom    | Sets or returns the bottom position of a positioned element | 2 |
| box-decoration-break    | Sets or returns the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break. | 3 |
| box-shadow    | Attaches one or more drop-shadows to the box | 3 |
| box-sizing    | Allows you to define certain elements to fit an area in a certain way | 3 |
| caption-side    | Sets or returns the position of the table caption | 2 |
| clear    | Sets or returns the position of the element relative to floating objects | 1 |
| clip    | Sets or returns which part of a positioned element is visible | 2 |
| color    | Sets or returns the color of the text | 1 |
| column-count    | Sets or returns the number of columns an element should be divided into | 3 |
| column-fill    | Sets or returns how to fill columns | 3 |
| column-gap    | Sets or returns the gap between the columns | 3 |
| column-rule    | A shorthand property for setting or returning all the columnRule* properties | 3 |
| column-rule-color    | Sets or returns the color of the rule between columns | 3 |
| column-rule-style    | Sets or returns the style of the rule between columns | 3 |
| column-rule-width    | Sets or returns the width of the rule between columns | 3 |
| columns    | A shorthand property for setting or returning columnWidth and columnCount | 3 |
| column-span    | Sets or returns how many columns an element should span across | 3 |
| column-width    | Sets or returns the width of the columns | 3 |
| content    | Used with the :before and :after pseudo-elements, to insert generated content | 2 |
| counter-increment    | Increments one or more counters | 2 |
| counter-reset    | Creates or resets one or more counters | 2 |
| cursor    | Sets or returns the type of cursor to display for the mouse pointer | 2 |
| direction    | Sets or returns the text direction | 2 |
| display    | Sets or returns an element's display type | 1 |
| empty-cells    | Sets or returns whether to show the border and background of empty cells, or not | 2 |
| filter    | Sets or returns image filters (visual effects, like blur and saturation) | 3 |
| flex    | Sets or returns the length of the item, relative to the rest | 3 |
| flex-basis    | Sets or returns the initial length of a flexible item | 3 |
| flex-direction    | Sets or returns the direction of the flexible items | 3 |
| flex-flow    | A shorthand property for the flexDirection and the flexWrap properties | 3 |
| flex-grow    | Sets or returns how much the item will grow relative to the rest | 3 |
| flex-shrink    | Sets or returns how the item will shrink relative to the rest | 3 |
| flex-wrap    | Sets or returns whether the flexible items should wrap or not | 3 |
| css-float    | Sets or returns the horizontal alignment of an element | 1 |
| font    | Sets or returns fontStyle, fontVariant, fontWeight, fontSize, lineHeight, and fontFamily in one declaration | 1 |
| font-family    | Sets or returns the font family for text | 1 |
| font-size    | Sets or returns the font size of the text | 1 |
| font-style    | Sets or returns whether the style of the font is normal, italic or oblique | 1 |
| font-variant    | Sets or returns whether the font should be displayed in small capital letters | 1 |
| font-weight    | Sets or returns the boldness of the font | 1 |
| font-size-adjust    | Preserves the readability of text when font fallback occurs | 3 |
| font-stretch    | Selects a normal, condensed, or expanded face from a font family | 3 |
| hanging-punctuation    | Specifies whether a punctuation character may be placed outside the line box | 3 |
| height    | Sets or returns the height of an element | 1 |
| hyphens    | Sets how to split words to improve the layout of paragraphs | 3 |
| icon    | Provides the author the ability to style an element with an iconic equivalent | 3 |
| image-orientation    | Specifies a rotation in the right or clockwise direction that a user agent applies to an image | 3 |
| justify-content    | Sets or returns the alignment between the items inside a flexible container when the items do not use all available space. | 3 |
| left    | Sets or returns the left position of a positioned element | 2 |
| letter-spacing    | Sets or returns the space between characters in a text | 1 |
| line-height    | Sets or returns the distance between lines in a text | 1 |
| list-style    | Sets or returns listStyleImage, listStylePosition, and listStyleType in one declaration | 1 |
| list-style-image    | Sets or returns an image as the list-item marker | 1 |
| list-style-position    | Sets or returns the position of the list-item marker | 1 |
| list-style-type    | Sets or returns the list-item marker type | 1 |
| margin    | Sets or returns the margins of an element (can have up to four values) | 1 |
| margin-bottom    | Sets or returns the bottom margin of an element | 1 |
| margin-left    | Sets or returns the left margin of an element | 1 |
| margin-right    | Sets or returns the right margin of an element | 1 |
| margin-top    | Sets or returns the top margin of an element | 1 |
| max-height    | Sets or returns the maximum height of an element | 2 |
| max-width    | Sets or returns the maximum width of an element | 2 |
| min-height    | Sets or returns the minimum height of an element | 2 |
| min-width    | Sets or returns the minimum width of an element | 2 |
| nav-down    | Sets or returns where to navigate when using the arrow-down navigation key | 3 |
| nav-index    | Sets or returns the tabbing order for an element | 3 |
| nav-left    | Sets or returns where to navigate when using the arrow-left navigation key | 3 |
| nav-right    | Sets or returns where to navigate when using the arrow-right navigation key | 3 |
| nav-up    | Sets or returns where to navigate when using the arrow-up navigation key | 3 |
| opacity    | Sets or returns the opacity level for an element | 3 |
| order    | Sets or returns the order of the flexible item, relative to the rest | 3 |
| orphans    | Sets or returns the minimum number of lines for an element that must be left at the bottom of a page when a page break occurs inside an element | 2 |
| outline    | Sets or returns all the outline properties in one declaration | 2 |
| outline-color    | Sets or returns the color of the outline around a element | 2 |
| outline-offset    | Offsets an outline, and draws it beyond the border edge | 3 |
| outline-style    | Sets or returns the style of the outline around an element | 2 |
| outline-width    | Sets or returns the width of the outline around an element | 2 |
| overflow    | Sets or returns what to do with content that renders outside the element box | 2 |
| overflow-x    | Specifies what to do with the left/right edges of the content, if it overflows the element's content area | 3 |
| overflow-y    | Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area | 3 |
| padding    | Sets or returns the padding of an element (can have up to four values) | 1 |
| padding-bottom    | Sets or returns the bottom padding of an element | 1 |
| padding-left    | Sets or returns the left padding of an element | 1 |
| padding-right    | Sets or returns the right padding of an element | 1 |
| padding-top    | Sets or returns the top padding of an element | 1 |
| page-break-after    | Sets or returns the page-break behavior after an element | 2 |
| page-break-before    | Sets or returns the page-break behavior before an element | 2 |
| page-break-inside    | Sets or returns the page-break behavior inside an element | 2 |
| perspective    | Sets or returns the perspective on how 3D elements are viewed | 3 |
| perspective-origin    | Sets or returns the bottom position of 3D elements | 3 |
| position    | Sets or returns the type of positioning method used for an element (static, relative, absolute or fixed) | 2 |
| quotes    | Sets or returns the type of quotation marks for embedded quotations | 2 |
| resize    | Sets or returns whether or not an element is resizable by the user | 3 |
| right    | Sets or returns the right position of a positioned element | 2 |
| table-layout    | Sets or returns the way to lay out table cells, rows, and columns | 2 |
| tab-size    | Sets or returns the length of the tab-character | 3 |
| text-align    | Sets or returns the horizontal alignment of text | 1 |
| text-align-last    | Sets or returns how the last line of a block or a line right before a forced line break is aligned when text-align is "justify" | 3 |
| text-decoration    | Sets or returns the decoration of a text | 1 |
| text-decoration-color    | Sets or returns the color of the text-decoration | 3 |
| text-decoration-line    | Sets or returns the type of line in a text-decoration | 3 |
| text-decoration-style    | Sets or returns the style of the line in a text decoration | 3 |
| text-indent    | Sets or returns the indentation of the first line of text | 1 |
| text-justify    | Sets or returns the justification method used when text-align is "justify" | 3 |
| text-overflow    | Sets or returns what should happen when text overflows the containing element | 3 |
| text-shadow    | Sets or returns the shadow effect of a text | 3 |
| text-transform    | Sets or returns the capitalization of a text | 1 |
| top    | Sets or returns the top position of a positioned element | 2 |
| transform    | Applies a 2D or 3D transformation to an element | 3 |
| transform-origin    | Sets or returns the position of transformed elements | 3 |
| transform-style    | Sets or returns how nested elements are rendered in 3D space | 3 |
| transition    | A shorthand property for setting or returning the four transition properties | 3 |
| transition-property    | Sets or returns the CSS property that the transition effect is for | 3 |
| transition-duration    | Sets or returns how many seconds or milliseconds a transition effect takes to complete | 3 |
| transition-timing-function    | Sets or returns the speed curve of the transition effect | 3 |
| transition-delay    | Sets or returns when the transition effect will start | 3 |
| unicode-bidi    | Sets or returns whether the text should be overridden to support multiple languages in the same document | 2 |
| vertical-align    | Sets or returns the vertical alignment of the content in an element | 1 |
| visibility    | Sets or returns whether an element should be visible | 2 |
| white-space    | Sets or returns how to handle tabs, line breaks and whitespace in a text | 1 |
| width    | Sets or returns the width of an element | 1 |
| word-break    | Sets or returns line breaking rules for non-CJK scripts | 3 |
| word-spacing    | Sets or returns the spacing between words in a text | 1 |
| word-wrap    | Allows long, unbreakable words to be broken and wrap to the next line | 3 |
| widows    | Sets or returns the minimum number of lines for an element that must be visible at the top of a page | 2 |
| z-index    | Sets or returns the stack order of a positioned element | 2 |


## Browser Support

```html
Chrome
Edge
Firefox
Internet Explorer (6+)
Opera
Safari
```


## Copyright and license

Code copyright 2017 Kirill Kotikov. Code released under the MIT license.