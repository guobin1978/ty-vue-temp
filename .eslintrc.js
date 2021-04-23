/** @format */

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? 1 : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // 禁止数组和对象键值对最后一个逗号
    "comma-dangle": ["error", "never"],
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止不必要的括号 //(a * b) + c;//报错
    "no-extra-parens": 2,
    // 禁止不必要的分号
    "no-extra-semi": 2,
    // 禁止对 function 声明重新赋值
    "no-func-assign": 2,
    // 禁止在字符串和注释之外不规则的空白
    "no-irregular-whitespace": 2,
    // 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math();
    "no-obj-calls": 2,
    // 禁止直接使用 Object.prototypes 的内置属性
    "no-prototype-builtins": 0,
    // 禁止正则表达式字面量中出现多个空格
    "no-regex-spaces": 2,
    // 强制把变量的使用限制在其定义的作用域范围内
    "block-scoped-var": 0,
    // 强制所有控制语句使用一致的括号风格
    curly: [2, "all"],
    // 使用 === 替代 == allow-null允许null和undefined==
    eqeqeq: [2, "allow-null"],
    // 要求或禁止 var 声明中的初始化(初值)
    "init-declarations": 0,
    // 不允许标签与变量同名
    "no-label-var": 2,
    // 不允许在变量定义之前使用它们
    "no-use-before-define": 0,
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    "array-bracket-spacing": [2, "never"],
    //强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
    // if while function 后面的{必须与if在同一行，java风格。
    "brace-style": [2, "1tbs", { allowSingleLine: true }],
    // 控制逗号前后的空格
    "comma-spacing": [2, { before: false, after: true }],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    // http://eslint.org/docs/rules/comma-style
    "comma-style": [2, "last"],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    "computed-property-spacing": [2, "never"],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    "key-spacing": [2, { beforeColon: false, afterColon: true }],
    // 强制使用一致的换行风格
    "linebreak-style": [2, "unix"],
    // 强制一行的最大长度
    "max-len": [1, 200],
    // 不允许空格和 tab 混合缩进
    "no-mixed-spaces-and-tabs": 2,
    // 不允许多个空行
    "no-multiple-empty-lines": [2, { max: 2 }],
    // 禁止 function 标识符和括号之间出现空格
    "no-spaced-func": 2,
    // 禁用行尾空格
    "no-trailing-spaces": 2,
    // 强制花括号内换行符的一致性
    "object-curly-newline": 0,
    // 强制在花括号中使用一致的空格
    "object-curly-spacing": 0,
    // 强制将对象的属性放在不同的行上
    "object-property-newline": 0,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    semi: [2, "always"],
    // 要求使用 let 或 const 而不是 var
    "no-var": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": {
            message: "Use object instead",
            fixWith: "object"
          }
        }
      }
    ]
  }
};
