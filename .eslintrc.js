/**
 * @type {string} dev | uat | prod
 * @description 當前環境
 *
 */
const appEnv = process.env.VUE_APP_ENV;

module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  parserOptions: { parser: 'babel-eslint' },
  plugins: [
    // html
    'vue',
  ],

  /**
   * 規則配置參考
   * [JS] https://eslint.org/docs/rules/
   * [vue]https://eslint.vuejs.org/rules/
   * https://kknews.cc/zh-tw/code/y5n36zb.html
   * [eslint例外註解pass規則] https://eslint.org/docs/user-guide/configuring
   * [prettier 參數設置規則] https://glebbahmutov.com/blog/configure-prettier-in-vscode/
   * "off" -> 0 關閉規則
   * "warn" -> 1 開啟警告規則
   * "error" -> 2 開啟錯誤規則
   */

  rules: {

    /**
     *
     * 邏輯錯誤及最佳實踐的規則
     *
     */

    'no-debugger': appEnv === 'production' ? 2 : 0, // 生產環境禁止debugger

    'no-console': appEnv === 'production' ? 2 : 0, // 生產環境禁止console

    'no-alert': appEnv === 'production' ? 2 : 0, // 生產環境禁止console

    'for-direction': 2, // 禁止for無限循環

    'no-compare-neg-zero': 2, // 禁止與-0進行比較

    'no-cond-assign': 2, // 禁止條件語句中出現賦值語句

    'no-control-regex': 2, // 在 ASCII 中，0-31 範圍內的控制字符是特殊的、不可見的字符。這些字符很少被用在 JavaScript 字符串中，所以一個正則表達式如果包含這些字符的，很有可能一個錯誤。

    'no-dupe-args': 2, // 禁止在函數定義或表達中出現重名參數

    'no-dupe-keys': 2, // 禁止在對象字面量中出現重複的鍵

    'no-duplicate-case': 2, // 禁止重複 case 標籤

    'no-empty': 0, // 禁止空塊語句

    'no-empty-character-class': 2, // 禁止在正則表達式中出現空字符集

    'no-ex-assign': 2, // 禁止對 catch 子句中的異常重新賦值。因為catch出來的都是錯誤信息，不需要重新賦值

    'no-extra-boolean-cast': 2, // 禁止不必要的布爾類型轉換，如 !!true

    'no-extra-semi': 2, // 禁用不必要的分號

    'no-inner-declarations': 2, // ??? 禁止在嵌套的語句塊中出現變量

    'no-regex-spaces': 2, // 禁止正則表達式字面量中出現多個空格

    'no-obj-calls': 2, // 禁止將全局對象當作函數進行調用

    'no-prototype-builtins': 2, // ??? 禁止直接在對象實例上調用 Object.prototype 的一些方法。

    'no-template-curly-in-string': 2, // 禁止在常規字符串中出現模板字面量占位符語法

    semi: [2, 'always'], // ??? 強制是否使用分號。

    'no-unexpected-multiline': 2, // 禁止使用令人困惑的多行表達式

    'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 語句後出現不可達代碼

    'use-isnan': 2, // 要求調用 isNaN()檢查 NaN

    'no-unsafe-negation': 2, // 禁止對關係運算符的左操作數使用否定操作符

    'valid-jsdoc': 2, // 強制使用有效的 JSDoc 注釋

    'valid-typeof': 2, // 強制 typeof 表達式與有效的字符串進行比較

    'array-callback-return': 2, // 強制數組方法的回調函數中有 return 語句

    'block-scoped-var': 2, // 把 var 語句看作是在塊級作用域範圍之內

    complexity: [1, 6], // 添加複雜度

    curly: 2, // ??? 要求遵循大括號約定

    'default-case': 1, // 要求 Switch 語句中有 Default 分支

    'dot-location': [2, 'property'], // 強制在點號之前換行

    'dot-notation': 2, // 點號和字面量，優先使用點號

    eqeqeq: [2, 'smart'], // ??? 要求使用 === 和 !==

    'guard-for-in': 2, // ??? 需要約束 for-in

    'no-caller': 2, // 禁用 caller 或 callee

    // 'no-empty-function': 2, // 禁止出現空函數

    'no-empty-pattern': 2, // 禁止使用空解構模式

    'no-eval': 2, // 禁用 eval()

    'no-global-assign': 2, // 禁止對原生對象或只讀的全局對象進行賦值

    'no-floating-decimal': 2, // ?? 禁止浮點小數

    'no-fallthrough': 2, // 禁止 case 語句落空

    'no-labels': 2, // 禁用標籤語句

    'no-extra-label': 2, // 禁用不必要的標籤

    'no-extra-bind': 2, // 禁止不必要的函數綁定

    'no-iterator': 2, // 禁用疊代器

    'no-lone-blocks': 2, // 禁用不必要的嵌套塊

    'no-loop-func': 2, // 禁止循環中存在函數

    /*
     * 禁止使用魔術數字，魔術數字是在代碼中多次出現的沒有明確含義的數字。它最好由命名常量取代。
     * 'no-magic-numbers': [2,
     *   {
     *     ignoreArrayIndexes: true,
     *     ignore: [-1, 0, 1, 2],
     *   }],
     */

    'no-multi-spaces': 2, // 禁止出現多個空格

    'no-multi-str': 2, // 禁止多行字符串

    'no-new': 2, // 禁止在不保存實例的情況下使用new

    'no-new-func': 2, // 禁用Function構造函數

    'no-new-wrappers': 2, // 禁止原始包裝實例

    'no-octal': 2, // 禁用八進位字面量

    'no-octal-escape': 2, // 禁止在字符串字面量中使用八進位轉義序列

    'no-param-reassign': 0, // ??? 禁止對函數參數再賦值

    'no-proto': 2, // 禁用__proto__，改用 getPrototypeOf 方法替代 __proto__。

    'no-redeclare': 2, // 禁止重新聲明變量

    'no-return-assign': 2, // 禁止在返回語句中賦值

    'no-return-await': 2, // 禁用不必要的 return await

    'no-script-url': 2, // 禁用 Script URL

    'no-self-assign': 2, // 禁止自身賦值

    'no-sequences': 2, // ??? 不允許使用逗號操作符

    'no-throw-literal': 2, // 限制可以被拋出的異常

    'no-unmodified-loop-condition': 2, // 禁用一成不變的循環條件

    'no-useless-call': 2, // 禁用不必要的 .call() 和 .apply()

    'no-useless-concat': 2, // 禁止沒有必要的字符拼接

    'no-useless-escape': 1, // 禁用不必要的轉義

    'no-useless-return': 2, // 禁止多餘的 return 語句

    'no-void': 2, // 禁止使用void操作符

    'no-with': 2, // 禁用 with 語句

    'prefer-promise-reject-errors': 1, // ??? 要求使用 Error 對象作為 Promise 拒絕的原因

    radix: 0, // 要求必須有基數

    'require-await': 2, // 禁止使用不帶 await 表達式的 async 函數max-lines

    'vars-on-top': 2, // 要求將變量聲明放在它們作用域的頂部

    'wrap-iife': [2, 'inside'], // 需要把立即執行的函數包裹起來

    strict: [2, 'global'], // 要求或禁止使用嚴格模式指令

    /**
     *
     * 變量相關的規則
     *
     */

    'init-declarations': 2, // ??? 強制或禁止變量聲明語句中初始化

    'no-delete-var': 2, // 禁止刪除變量

    'no-shadow': 0, // 禁止變量聲明覆蓋外層作用域的變量

    'no-shadow-restricted-names': 2, // 關鍵字不能被遮蔽

    'no-undef': 0, // 禁用未聲明的變量

    'no-unused-vars': 0, // ??? 禁止未使用過的變量

    'no-use-before-define': 2, // 禁止定義前使用

    /**
     *
     * 代碼風格
     *
     */
    'array-bracket-newline': [2, 'consistent'], // 在數組開括號後和閉括號前強制換行

    'array-bracket-spacing': 2, // 強制在括號內前後使用空格

    'array-element-newline': [2, { multiline: true, "minItems": 3 }], // ??? 強制數組元素間出現換行

    'block-spacing': 2, // 強制在代碼塊中開括號前和閉括號後有空格

    'brace-style': 2, // 大括號風格要求

    camelcase: 1, // 要求使用駱駝拼寫法

    'comma-dangle': [2, 'always-multiline'], // 要求或禁止使用拖尾逗號

    'comma-spacing': 2, // 強制在逗號周圍使用空格

    'comma-style': 2, // 逗號風格

    'computed-property-spacing': 2, // 禁止或強制在計算屬性中使用空格

    'consistent-this': [2, 'self'], // ??? 要求一致的 This

    'eol-last': [1, 'always'], // ??? 要求或禁止文件末尾保留一行空行

    'func-call-spacing': 2, // 要求或禁止在函數標識符和其調用之間有空格

    'func-style': [1, 'declaration'], // ??? 強制 function 聲明或表達式的一致性

    'function-paren-newline': [1, 'multiline'], // 強制在函數括號內使用一致的換行

    indent: [2, 2], // 強制使用一致的縮進

    // 'jsx-quotes': 2, // 強制在 JSX 屬性中一致地使用雙引號或單引號

    'key-spacing': 2, // 強制在對象字面量的鍵和值之間使用一致的空格

    'keyword-spacing': 2, // 強制關鍵字周圍空格的一致性

    'linebreak-style': 2, // 強制使用一致的換行符風格，用\n，不用\r\n

    'lines-around-comment': 2, // 強制注釋周圍有空行

    'lines-between-class-members': 2, // 要求在類成員之間出現空行

    'max-depth': 2, // 強制塊語句的最大可嵌套深度

    /*
     * 強制行的最大長度
     * 先不使用，IDE eslint工具無法自動修正
     */
    /*
     * 'max-len': [
     *   0,
     *   {
     *     code: 100,
     *
     *     tabWidth: 4,
     *
     *     ignoreUrls: true,
     *
     *     ignoreTrailingComments: true,
     *
     *     ignoreTemplateLiterals: true
     *   }
     * ],
     */

    // 'max-lines': [2, 1000], // ??? 強制文件的最大行數

    'max-nested-callbacks': [2, 5], // 強制回調函數最大嵌套深度

    'max-statements-per-line': 2, // 強制每一行中所允許的最大語句數量

    'multiline-comment-style': 0, // 強制對多行注釋使用特定風格

    // 'new-cap': 2, // 要求構造函數首字母大寫

    // 'new-parens': 2, // 要求調用無參構造函數時帶括號

    // 'newline-per-chained-call': 2, // 要求方法鏈中每個調用都有一個換行符

    // 'no-bitwise': 2, // 禁止使用按位操作符

    'no-inline-comments': 0, // ??? 禁止使用內聯注釋

    'no-lonely-if': 2, // 禁止 if 語句作為唯一語句出現在 else 語句塊中

    // 'no-mixed-spaces-and-tabs': 2, // 禁止使用 空格 和 tab 混合縮進

    // 'no-multiple-empty-lines': 1, // ??? 不允許多個空行

    // 'no-negated-condition': 2, // 禁用否定表達式

    'no-nested-ternary': 2, // 禁止使用嵌套的三元表達式

    'no-new-object': 2, // 禁止使用 Object 構造函數

    // 'no-trailing-spaces': 2, // 禁用行尾空白

    // 'no-underscore-dangle': 2, // 禁止標識符中有懸空下劃線

    // quotes: [2, 'single'], // 強制使用一致的單引號

    // 'quote-props': [2, 'as-needed'], // ??? 要求對象字面量屬性名稱使用引號

    // 'operator-linebreak': [2, 'before'], // 強制操作符使用一致的換行符風格

    'one-var': [2, 'never'], // ??? 強制函數中的變量在一起聲明或分開聲明

    // 'object-property-newline': 1, // ??? 強制將對象的屬性放在不同的行上

    // 'object-curly-spacing': [2, 'always'], // 強制在花括號中使用一致的空格

    // 'object-curly-newline': [1, { multiline: true }],// ??? 對象屬性換行

    // 'no-whitespace-before-property': 2, // 禁止屬性前有空白

    'no-unneeded-ternary': 2, // 禁止可以表達為更簡單結構的三元操作符

    // 'semi-spacing': 2, // 強制分號前後有空格

    // 'semi-style': 2, // 分號風格

    // 'space-before-blocks': [2, 'always'], // 禁止語句塊之前的空格

    // 'space-before-function-paren': [2, 'never'], // 禁止函數圓括號之前有一個空格

    // 'space-in-parens': 2, // 禁止或強制圓括號內的空格

    // 'space-infix-ops': 2, // 要求中綴操作符周圍有空格

    // 'space-unary-ops': 2, // 禁止在一元操作符之前或之後存在空格

    'spaced-comment': 2, // 要求在注釋前有空白

    'switch-colon-spacing': 2, // 強制在 switch 的冒號左右有空格

    'template-tag-spacing': 2, // 要求在模板標記和它們的字面量之間有空格

    /**
     *
     * ES6相關規則
     *
     */

    'arrow-parens': [2, 'as-needed'], // 要求箭頭函數的參數使用圓括號

    'arrow-body-style': 2, // 要求箭頭函數體使用大括號

    'arrow-spacing': 2, // 要求箭頭函數的箭頭之前或之後有空格

    'generator-star-spacing': 2, // ??? 強制 generator 函數中 * 號周圍有空格

    'no-class-assign': 2, // 不允許修改類聲明的變量

    // 'no-confusing-arrow': 2, // 禁止在可能與比較操作符相混淆的地方使用箭頭函數

    'no-const-assign': 2, // 不允許改變用const聲明的變量

    'no-dupe-class-members': 2, // 不允許類成員中有重複的名稱

    'no-duplicate-imports': 2, // 禁止重複導入

    'no-new-symbol': 0, // 禁止 Symbol 操作符和 new 一起使用lines-between

    'no-useless-computed-key': 2, // 禁止在對象中使用不必要的計算屬性

    'no-useless-constructor': 2, // 禁用不必要的構造函數

    'no-useless-rename': 2, // 禁止在 import 和 export 和解構賦值時將引用重命名為相同的名字

    'no-var': 2, // 要求使用 let 或 const 而不是 var

    'object-shorthand': 2, // 要求對象字面量簡寫語法

    'prefer-arrow-callback': 2, // 要求使用箭頭函數作為回調

    'prefer-const': 1, // ??? 建議使用const

    /*
     * 優先使用數組和對象解構
     * 'prefer-destructuring': [2,
     *   {
     *     array: false,
     *     object: true,
     *   }],
     */

    'prefer-rest-params': 2, // 使用剩餘參數代替 arguments

    'prefer-spread': 2, // 建議使用擴展運算符而非.apply()

    'prefer-template': 2, // 建議使用模板而非字符串連接

    'require-yield': 2, // 禁用函數內沒有yield的 generator 函數

    // 'rest-spread-spacing': 2, // 強制剩餘和擴展運算符及其表達式之間有空格

    'template-curly-spacing': 2, // 強制模板字符串中空格的使用

    // ??? import 排序 問題是要以字母排序
    'sort-imports': [
      0,
      {
        ignoreCase: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['all',
          'single',
          'multiple',
          'none'],
      },
    ],

    /**
     *
     * Vue 相關配置
     *
     */
    'vue/no-unused-components': 0,
    'vue/custom-event-name-casing': 0,
    'vue/max-attributes-per-line': [2,
      {
        'singleline': 6,
        'multiline': { max: 6 },
      }],
  },
};
