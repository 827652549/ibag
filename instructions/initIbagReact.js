const {recovery} = require('@/core/config-transform')

const createJson = [
  "output",
  {
    "filename": "README",
    "extension": "md",
    "context": "# react\n\ncreated by ibag\n"
  },
  {
    "filename": "package",
    "extension": "json",
    "context": "{\n  \"name\": \"ibag-project\",\n  \"version\": \"0.1.0\",\n  \"private\": true,\n  \"dependencies\": {\n    \"@testing-library/react\": \"^11.1.0\",\n    \"@testing-library/user-event\": \"^12.1.10\",\n    \"react\": \"^17.0.1\",\n    \"react-dom\": \"^17.0.1\",\n    \"react-scripts\": \"4.0.3\"\n  },\n  \"scripts\": {\n    \"start\": \"react-scripts start\",\n    \"build\": \"react-scripts build\",\n    \"test\": \"react-scripts test\",\n    \"eject\": \"react-scripts eject\"\n  },\n  \"eslintConfig\": {\n    \"extends\": [\n      \"react-app\",\n      \"react-app/jest\"\n    ]\n  },\n  \"browserslist\": {\n    \"production\": [\n      \">0.2%\",\n      \"not dead\",\n      \"not op_mini all\"\n    ],\n    \"development\": [\n      \"last 1 chrome version\",\n      \"last 1 firefox version\",\n      \"last 1 safari version\"\n    ]\n  }\n}\n"
  },
  [
    "public",
    {
      "filename": "favicon",
      "extension": "ico",
      "context": "\u0000\u0000\u0001\u0000\u0004\u0000\u0010\u0010\u0000\u0000\u0001\u0000 \u0000�\u0001\u0000\u0000F\u0000\u0000\u0000\u0018\u0018\u0000\u0000\u0001\u0000 \u0000\f\u0003\u0000\u0000)\u0002\u0000\u0000  \u0000\u0000\u0001\u0000 \u00009\u0003\u0000\u00005\u0005\u0000\u0000@@\u0000\u0000\u0001\u0000 \u0000�\u0006\u0000\u0000n\b\u0000\u0000�PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0010\b\u0003\u0000\u0000\u0000(-\u000fS\u0000\u0000\u0000�PLTE\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"2PX=r�)7;*:>H��-BGE��8do5Xb6[eK��K��1MU9gs3S\\I��:gt'03@{�V��T��A}�V��@y�6\\fH��-CII��E��+;@7_i7_jF��J��K��H��-BHa��,@FC��L��&.0W��N��I��$)+B��J��R��?v�>s�>u�S��=qP��P��P��,?D4U^%+-M��K��%+,2OX+<AL��#&&D��%,.I��v�T�\u0000\u0000\u0000\u0005tRNSI��J�e�e�\u0000\u0000\u0000�IDATx\u0001M��ZEA\f��ٳ\t��%R����TTh�G��,���=\u0003�\u0016��m�f�mnf�A�$�>!\u0003�g��Hg��Eߏܵ}\u0002\t\u0006ݻ����k\u0010d\u0013���Jo\u0011���3�L\"J������Q�$��ļ\u001fff�,�5i9\u0002\u0019̟�H�\u001c/mB\u0002��w��w;D\r�+&�W�\u0015���D�o\u0014@ʴRI��B�om\u001a.\u0007۳\u0007�\u0000\u0000\u0000\u0000IEND�B`��PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\u0018\u0000\u0000\u0000\u0018\b\u0003\u0000\u0000\u0000ש��\u0000\u0000\u0001ePLTE\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"2RZN��J��3R[J��)59Y��0KS4W`Q��L��%+-0JR)6::gtC��\"##?v�U��?w�<n{&-/Y��=q:iuB�A}�A{�B��/IPP��=q�K��_��L��$();lzR��a��I��Z��3U^1MU3T]Z��I��X��F��-BGP��6[e,@E5ZdO��-BHX��+=AW��,@FW��Q��?v�W��+<A@y�\"#$\\��4Wa\\��S��$(*.EL^��V��6]h#$%G��#&';jwV��-CIL��Z��^��>u�S��/HNM��_��\\��M��8doD��D��>t�+=B[��,>C>t�<o}@y�0LS.EKT��$'(%,.A~�W��C��%+,\\��C!�\u001d\u0000\u0000\u0000\u0007tRNS\u0006����G��\u0000\u0000\u0001OIDATx\u0001l��B�Q\u0014��u��_ȳ<�\u0016��v\u001ce��\u0006���a\u00166\u0016Aξ�\u0017\u0004�v�{\u0007@�\u0007\u0000E'\u0000�d\u0000I�!�\u001c��\u001a \u0000�C��T�\u000b�g\u0000\u001c\u00001�E(�\u0005\u0014�SQs\u001a�i\rď�Z��\u0016V\u0006�\u000b\u0000\u0002�)�g!��h��\u0010\u0002t\u0005�-i}��\u0011�<�?\u0015��lBZaĴ4{D�⌻_e8�yǁ��\u001f3�)��?�f;8.�\u001c�t�=�;\u000e\t:�52fKZ�l\u0012��ؚ�9.�#��\u0002A�q���\u0016\u0006\u001f��V��`=\u0003\u0003$��?_���\u0005�qM�.�J$\u000f\n?^q���ۏ�.},��s��\f\f_TttԾ\u0000\u00151#\u0007�/(�-[\u0006\u0012��`��`�\u0004����Z\u001fd5����?�ebZ�ވi.��\f\u0010\u0019�q΄+1�\u0001}5�\u0000\u0000��d�G���\u0000\u0000\u0000\u0000IEND�B`��PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000 \u0000\u0000\u0000 \b\u0003\u0000\u0000\u0000D���\u0000\u0000\u0001APLTE\u0000\u0000\u0000\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"2RZV��_��U��=r�$()'25]��C��0LS<o}X��X��0JQ=p~D��<n{V��E��8do_��E��F��H��9dp_��H��I��F��6[e`��`��L��/GM_��U��'02P��/IPP��X��&/1;ly3R[`��G��T��\\��a��1OW\"##Q��a��R��=q�`��.EL+=AT��-CIK��#&'C��^��I��&.04U^^��@y�Z��$(*[��^��,?DR��\"#$1NV1MTD��>u�;kxG��R��/HN&-/@y�>s�>t�@z�]��P��$'(D��]��<n|0JRU��\u000e�\\�\u0000\u0000\u0000\ttRNS\u0000%��'��(�~���\u0000\u0000\u0001�IDATx\u0001��\u0003�C1\u0014F_ݿMm۶4�m{�\u000b��n����\t�\u0004A$��\u0007$b� He�\u0005�T\u0010�W��h��h�:PtZ\rQ�0@.`��`4�-V\u001b`�Z�&�A�\u0001#��bk������>.''�\u0003`\u0004C$\bF��\t�(\u0018�x\"6X\u0010�\u0004c\u0012�T��L�@I\u001a�;d\u0000d-�|�P,\u0001Ȕ9�R��\u001b�f3\u0014��F�VmM\u000b�X����\u0019�\u0017@Y�7����N�=\u0012\u0016�\f���ʪu\r}֬�+�e�aiq ��76����=h\r�Z���\u001cl\u0001�\u001b�}�\u0006ʱ�[F�I9A�k9\u0006���\u000b�\u0014�3��9\u0013Ρ�qB~��b���U_�^��\u0000[\u0007��\u000ew��{z�\u0007v�\u001bz��(��(��(��\u0007��f�q��G���k���Y�\u0016��f���~�:*4�Q\\O>�����<ד�W���Z|\u0007ދ�7���jT���n\u000f���\u000f��`$H�+�GO���*�x���\u0001�X*|\u0002�\u0018^�\u0005\u000fd\u000f\u0000\u0000\u0000\u0000IEND�B`��PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000@\u0000\u0000\u0000@\b\u0003\u0000\u0000\u0000����\u0000\u0000\u0002:PLTE\u0000\u0000\u0000\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"%+-@y�W��`��^��S��C��,>C*8<X��a��a��M��+<Aa��X��#%%T��L��=q>u�K��`��A}�L��8do=r�%+,@y�^��S��)59=q�P��U��\"#$P��\\��0JQQ��\"##U��#&&_��>t�>s�`��_��5Yc1OW5Zd1NV+=B1MU+;@/GM\\��*;?3S\\)8<2RZ_��+=A]��,@F,@E&-/0KS7alO��9dp8amB~�E��P��N��'023T]]��?x�3U^C��6\\gU��&.0D��7_iR��H��I��M��$(*?v�Z��X��-AG#$%[��8co[��W��C��'25?v�8bn%*+L��N��2PX)7;=p~(58^��P��4WaQ��T��0JRQ��T��I��6]hR��T��0LSF��9eqE��E��9gsF��C��#&'\\��`��&/16\\fB��A{�R��]��(47%,.*:>*9=9fr:gt7^iU��?w�Z��X��^��Q��H��)6:V��'034U^E��.EL.FMK��@z�S�\u001c\u000e\u0000\u0000\u0000\u0019tRNS\u0000*����\u0006���\t���+����Ԑ,����=V�\u0000\u0000\u0004\fIDATx\u0001�˵\u0001C!\u0000\u0004��C|�\u0005��\u0005^yR]�M��O]����0N�2����\"\u001b\u0019���(0V\u0015�(�Y%PDT-~(m��!�K\f�Y�\u0015~���I�f{��\u001f��a����3��Op&�\u001cФ��\u0000x��#�j��ڶm�m��c)]m����)Ƨgf�\u0014hk���Ҡ�gg�Ǚ��\u0019�+X���uiy\u0005Vת�k���\\[�:,�\b6��jĲ\r;�\"�;��X��\u0001�f��\u0011�����S����8=�o�;���(\u0018���ӥBk�e��\u0015\\\u001b\u00057p+m����N�<��Q�\bO���\u0005���y�g�\u0015tt��\u001bo������V�\u0001���s\u0002������&_�a\u0014���V\u0015~��\u0019?�*8��Q ;8��,���\u000bf���\u001d1\u000b�x��ק�\u0004*���A���a#\b��\u0016��#�nP�i+��C�,�����_�Nb��ø�\u0005\u0000�H�B*�Ҧ �L(\u0000^<�Á�L6\u0007pJ�P��\b����%\"�R,�9\u0005�e3eR�a1�(\n��q�8َ��mK˱mƶm���yi!�\u000eΪY�u���_��?i���+�\u000f��A\u0011|\u0016�{���?��_En\u0001).\u0001J�D�<�\n���Z\\Ts�R*\b(\u0017\t��\u0005J��\u0002�u\u0010X/\u001a\r4J\u00139��5�DE�4k�4�&i�V4�\u0002���\u0016\b��vsf:�g,���BC��$�\b����@\u0011�I_?\u0003<\u001d\u0014�!\f^���ӽ����B�%\u0010L�w�\u0018\u0006FD1���(F�\u001e��\u001eH�%0�\u0003�\u0019��؄(�0�\u0012��\u0018\u0017'��\u0001�N.0u�@�Y�P\u0004W�I�aN�K\f�\u000f��?�ӵ�=�e�v/c����0c\u00160�2��:�06R-u�ĭ\\Q̶�䴼�6R#\r�F��6��rՁ��u��m�����I�i~\u0001 ����ÏsP�\"�\u0000\u000b�\reiy��P����򒧡���,S]U��V�\u001b�֔��Z��o��\u001b�xz���Snm�{ںwaل�\u001e�Ż���(mg/�������\u0005�[�\b\u0018\u0019b��\u0017q��&կ\u0007��$\u0016�zȊ\u0017�\u0004H>a�KT1/��1O��0�.h\u0007͇Y�A���\n-�>ۋ���Xբ�}ߨ�\f��;\u0007��N��v���θ�1\u0000����O@&v/��_��\\�\u000e�\\�.\u000f��+0�\u0003;\u001c\u0014\u0001!\u0006f�\f\u0010���%� JY�O�'/�]_�;�\u0010�'\"&N�n\ta\u0011Q�^\u0000\u0019�cx�A��\u0000\u0000\u0000\u0000IEND�B`�"
    },
    {
      "filename": "index",
      "extension": "html",
      "context": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"%PUBLIC_URL%/favicon.ico\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta\n      name=\"description\"\n      content=\"Web site created using ibag\"\n    />\n    <title>ibag project</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id=\"root\"></div>\n  </body>\n</html>\n"
    }
  ],
  [
    "src",
    {
      "filename": "App",
      "extension": "css",
      "context": ".App {\n    text-align: center;\n    margin-top: 200px;\n    color: rgb(90, 88, 88);\n    font-size: 40px;\n}\n"
    },
    {
      "filename": "App",
      "extension": "js",
      "context": "import './App.css';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      Welcome to ibag\n    </div>\n  );\n}\n\nexport default App;\n"
    },
    {
      "filename": "index",
      "extension": "css",
      "context": "body {\n    margin: 0;\n}\n"
    },
    {
      "filename": "index",
      "extension": "js",
      "context": "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n"
    }
  ],
]

/**
 * 指令【创建ibag的react初始项目】
 */
class InitIbagReact extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      recovery('../',createJson)
    })
  }
}
module.exports = InitIbagReact
