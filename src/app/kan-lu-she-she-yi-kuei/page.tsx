import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function KanLuPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>
      <HanziPinyin
        size="lg"
        hanzi={["甘", "露", "施", "食", "儀", "軌"]}
        pinyin={["gān", "lù", "shī", "shí", "yí", "guǐ"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["南", "無", "佛", "陀", "耶", "。"]}
          pinyin={["nán", "wú", "fó", "tuó", "yé", ""]}
        />
        <HanziPinyin
          hanzi={["南", "無", "達", "摩", "耶", "。"]}
          pinyin={["nán", "wú", "dá", "mó", "yé", ""]}
        />
        <HanziPinyin
          hanzi={["南", "無", "僧", "伽", "耶", "。"]}
          pinyin={["nán", "wú", "sēng", "qié", "yé", ""]}
        />
        <HanziPinyin
          hanzi={[
            "南",
            "無",
            "本",
            "尊",
            "釋",
            "迦",
            "牟",
            "尼",
            "如",
            "來",
            "。",
          ]}
          pinyin={[
            "nán",
            "wú",
            "běn",
            "zūn",
            "shì",
            "jiā",
            "móu",
            "ní",
            "rú",
            "lái",
            "",
          ]}
        />
        <HanziPinyin
          hanzi={["南", "無", "安", "住", "大", "地", "菩", "薩", "眾", "。"]}
          pinyin={[
            "nán",
            "wú",
            "ān",
            "zhù",
            "dà",
            "dì",
            "pú",
            "sà",
            "zhòng",
            "",
          ]}
        />
        <HanziPinyin
          hanzi={["南", "無", "一", "切", "龍", "天", "善", "神", "。"]}
          pinyin={[
            "nán",
            "wú",
            "yī",
            "qiè",
            "lóng",
            "tiān",
            "shàn",
            "shén",
            "",
          ]}
        />
        <HanziPinyin
          hanzi={["願", "以", "威", "神", "加", "哀", "護", "助", "。"]}
          pinyin={["yuàn", "yǐ", "wēi", "shén", "jiā", "āi", "hù", "zhù", ""]}
        />

        {/* Page 2 begins here */}
        <HanziPinyin
          hanzi={["我", "今", "召", "請", "十", "方", "剎", "土", "。"]}
          pinyin={["wǒ", "jīn", "zhào", "qǐng", "shí", "fāng", "chà", "tǔ", ""]}
        />
        <HanziPinyin
          hanzi={["盡", "虛", "空", "界", "。", "一", "切", "六", "趣", "。"]}
          pinyin={[
            "jìn",
            "xū",
            "kōng",
            "jiè",
            "",
            "yī",
            "qiè",
            "liù",
            "qù",
            "",
          ]}
        />
        <HanziPinyin
          hanzi={["餓", "鬼", "有", "情", "類", "。", "以", "三", "寶", "威"]}
          pinyin={[
            "è",
            "guǐ",
            "yǒu",
            "qíng",
            "lèi",
            "",
            "yǐ",
            "sān",
            "bǎo",
            "wēi",
          ]}
        />
        <HanziPinyin
          hanzi={["神", "力", "故", "。", "悉", "至", "我", "所", "。"]}
          pinyin={["shén", "lì", "gù", "", "xī", "zhì", "wǒ", "suǒ", ""]}
        />
      </div>
    </div>
  );
}
