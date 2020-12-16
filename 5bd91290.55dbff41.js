(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),o=(n(0),n(170)),l={title:"selector(options)",sidebar_label:"selector()"},s={id:"api-reference/core/selector",title:"selector(options)",description:'*Selectors* represent a function, or **derived state** in Recoil.  You can think of them as similar to an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values.  If only a `get` function is provided, the selector is read-only and returns a `RecoilValueReadOnly` object.  If a `set` is also provided, it returns a writeable `RecoilState` object.',source:"@site/docs/api-reference/core/selector.md",permalink:"/docs/api-reference/core/selector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/selector.md",sidebar_label:"selector()",sidebar:"docs",previous:{title:"atom(options)",permalink:"/docs/api-reference/core/atom"},next:{title:"class Loadable",permalink:"/docs/api-reference/core/Loadable"}},c=[{value:"Dynamic Dependencies",id:"dynamic-dependencies",children:[]},{value:"Writeable Selectors",id:"writeable-selectors",children:[]},{value:"Asynchronous Selectors",id:"asynchronous-selectors",children:[]},{value:"Example (Synchronous)",id:"example-synchronous",children:[]},{value:"Example (Asynchronous)",id:"example-asynchronous",children:[]}],i={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Selectors")," represent a function, or ",Object(o.b)("strong",{parentName:"p"},"derived state"),' in Recoil.  You can think of them as similar to an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values.  If only a ',Object(o.b)("inlineCode",{parentName:"p"},"get")," function is provided, the selector is read-only and returns a ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilValueReadOnly")," object.  If a ",Object(o.b)("inlineCode",{parentName:"p"},"set")," is also provided, it returns a writeable ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilState")," object."),Object(o.b)("p",null,"Recoil manages atom and selector state changes to know when to notify components subscribing to that selector to re-render.  If an object value of a selector is mutated directly it may bypass this and avoid properly notifying subscribing components.  To help detect bugs, Recoil will freeze selector value objects in development mode."),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function selector<T>({\n  key: string,\n\n  get: ({\n    get: GetRecoilValue\n  }) => T | Promise<T> | RecoilValue<T>,\n\n  set?: (\n    {\n      get: GetRecoilValue,\n      set: SetRecoilState,\n      reset: ResetRecoilState,\n    },\n    newValue: T | DefaultValue,\n  ) => void,\n\n  dangerouslyAllowMutability?: boolean,\n})\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"type ValueOrUpdater<T> = T | DefaultValue | ((prevValue: T) => T | DefaultValue);\ntype GetRecoilValue = <T>(RecoilValue<T>) => T;\ntype SetRecoilState = <T>(RecoilState<T>, ValueOrUpdater<T>) => void;\ntype ResetRecoilState = <T>(RecoilState<T>) => void;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," - A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application.  It needs to be stable across executions if used for persistence."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get")," - A function that evaluates the value for the derived state.  It may return either a value directly or an asynchronous ",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," or another atom or selector representing the same type.  It is passed an object as the first parameter containing the following properties:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get")," - a function used to retrieve values from other atoms/selectors. All atoms/selectors passed to this function will be implicitly added to a list of ",Object(o.b)("strong",{parentName:"li"},"dependencies")," for the selector. If any of the selector's dependencies change, the selector will re-evaluate."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"set?")," - If this property is set, the selector will return ",Object(o.b)("strong",{parentName:"li"},"writeable")," state. A function that is passed an object of callbacks as the first parameter and the new incoming value.  The incoming value may be a value of type ",Object(o.b)("inlineCode",{parentName:"li"},"T")," or maybe an object of type ",Object(o.b)("inlineCode",{parentName:"li"},"DefaultValue")," if the user reset the selector.  The callbacks include:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get")," - a function used to retrieve values from other atoms/selectors. This function will not subscribe the selector to the given atoms/selectors."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"set")," - a function used to set the values of upstream Recoil state. The first parameter is the Recoil state and the second parameter is the new value.  The new value may be an updater function or a ",Object(o.b)("inlineCode",{parentName:"li"},"DefaultValue")," object to propagate reset actions."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - In some cases it may be desireable allow mutating of objects stored in selectors that don't represent state changes.  Use this option to override freezing objects in development mode.")),Object(o.b)("hr",null),Object(o.b)("p",null,"A selector with a simple static dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => get(myAtom) * 100,\n});\n")),Object(o.b)("h3",{id:"dynamic-dependencies"},"Dynamic Dependencies"),Object(o.b)("p",null,"A read-only selector has a ",Object(o.b)("inlineCode",{parentName:"p"},"get")," method which evaluates the value of the selector based on dependencies.  If any of those dependencies are updated, then the selector will re-evaluate.  The dependencies are dynamically determined based on the atoms or selectors you actually use when evaluating the selector.  Depending on the values of the previous dependencies, you may dynamically use different additional dependencies.  Recoil will automatically update the current data-flow graph so that the selector is only subscribed to updates from the current set of dependencies"),Object(o.b)("p",null,"In this example ",Object(o.b)("inlineCode",{parentName:"p"},"mySelector")," will depend on the ",Object(o.b)("inlineCode",{parentName:"p"},"toggleState")," atom as well as either ",Object(o.b)("inlineCode",{parentName:"p"},"selectorA")," or ",Object(o.b)("inlineCode",{parentName:"p"},"selectorB")," depending on the state of ",Object(o.b)("inlineCode",{parentName:"p"},"toggleState"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const toggleState = atom({key: 'Toggle', default: false});\n\nconst mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => {\n    const toggle = get(toggleState);\n    if (toggle) {\n      return get(selectorA);\n    } else {\n      return get(selectorB);\n    }\n  },\n});\n")),Object(o.b)("h3",{id:"writeable-selectors"},"Writeable Selectors"),Object(o.b)("p",null,"A bi-directional selector receives the incoming value as a parameter and can use that to propagate the changes back upstream along the data-flow graph.  Because the user may either set the selector with a new value or reset the selector, the incoming value is either of the same type that the selector represents or a ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultValue")," object which represents a reset action."),Object(o.b)("p",null,"This simple selector essentially wraps an atom to add an additional field.  It just passes through set and reset operations to the upstream atom."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const proxySelector = selector({\n  key: 'ProxySelector',\n  get: ({get}) => ({...get(myAtom), extraField: 'hi'}),\n  set: ({set}, newValue) => set(myAtom, newValue),\n});\n")),Object(o.b)("p",null,"This selector transforms the data, so needs to check if the incoming value is a ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultValue"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const transformSelector = selector({\n  key: 'TransformSelector',\n  get: ({get}) => get(myAtom) * 100,\n  set: ({set}, newValue) =>\n    set(myAtom, newValue instanceof DefaultValue ? newValue : newValue / 100),\n});\n")),Object(o.b)("h3",{id:"asynchronous-selectors"},"Asynchronous Selectors"),Object(o.b)("p",null,"Selectors may also have asynchronous evaluation functions and return a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," to the output value.  Please see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/asynchronous-data-queries"}),"this guide")," for more information."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const myQuery = selector({\n  key: 'MyQuery',\n  get: async ({get}) => {\n    return await myAsyncQuery(get(queryParamState));\n  }\n});\n")),Object(o.b)("h3",{id:"example-synchronous"},"Example (Synchronous)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {atom, selector, useRecoilState, DefaultValue} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelsius = selector({\n  key: 'tempCelsius',\n  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) =>\n    set(\n      tempFahrenheit,\n      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32\n    ),\n});\n\nfunction TempCelsius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelsius);\n  const resetTemp = useResetRecoilState(tempCelsius);\n\n  const addTenCelsius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n  const reset = () => resetTemp();\n\n  return (\n    <div>\n      Temp (Celsius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelsius}>Add 10 Celsius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n      <br />\n      <button onClick={reset}>>Reset</button>\n    </div>\n  );\n}\n")),Object(o.b)("h3",{id:"example-asynchronous"},"Example (Asynchronous)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {selector, useRecoilValue} from 'recoil';\n\nconst myQuery = selector({\n  key: 'MyDBQuery',\n  get: async () => {\n    const response = await fetch(getMyRequestUrl());\n    return response.json();\n  },\n});\n\nfunction QueryResults() {\n  const queryResults = useRecoilValue(myQuery);\n\n  return (\n    <div>\n      {queryResults.foo}\n    </div>\n  );\n}\n\nfunction ResultsSection() {\n  return (\n    <React.Suspense fallback={<div>Loading...</div>}>\n      <QueryResults />\n    </React.Suspense>\n  );\n}\n")),Object(o.b)("p",null,"Please see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/asynchronous-data-queries"}),"this guide")," for more complex examples."))}u.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,s({ref:t},i,{components:n})):r.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);