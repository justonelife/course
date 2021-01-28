import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'nameToUrl'
})
export class NameToUrlPipe implements PipeTransform {

    transform(name: string): string {
        name = this.removeUnicode(name);

        let result: string;
        let re1 = /\s*\-\s*/;
        let re2 = /\s+/;

        result = name.replace(re1, '-');
        result = result.split(re2).join('-');

        return result;
    }

    removeUnicode(str: string) {
        var AccentsMap = [
            "aàảãáạăằẳẵắặâầẩẫấậ",
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
            "dđ", "DĐ",
            "eèẻẽéẹêềểễếệ",
            "EÈẺẼÉẸÊỀỂỄẾỆ",
            "iìỉĩíị",
            "IÌỈĨÍỊ",
            "oòỏõóọôồổỗốộơờởỡớợ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
            "uùủũúụưừửữứự",
            "UÙỦŨÚỤƯỪỬỮỨỰ",
            "yỳỷỹýỵ",
            "YỲỶỸÝỴ"
        ];
        for (var i = 0; i < AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str.toLocaleLowerCase();
    }

}
