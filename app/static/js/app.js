var viewModel = function() {
    var self = this;
    self.surveyCode = ko.observable("");
    self.hospitalName = ko.observable("");
    self.hospitalStreetAddr = ko.observable("");
    self.hospitalRoad = ko.observable("");
    self.hospitalDistrict = ko.observable("");
    self.hospitalProvince = ko.observable("");
    self.hospitalZipcode = ko.observable("");
    self.hospitalTel = ko.observable("");
    self.hospitalEmail = ko.observable("");
    self.hospitalSize = ko.observable("");
    self.hospitalNumBed = ko.observable("");
    self.hospitalSurveyDate = ko.observable("");
    self.hospitalAssessor = ko.observable("");
    self.hospitalAssessorPosition = ko.observable("");
    self.hospitalAssessorTel = ko.observable("");
    self.hospitalAssessorEmail = ko.observable("");
    self.hospitalAccredits = ko.observableArray([]);
    self.checkedHA = ko.observable(false);
    self.checkedHAHP = ko.observable(false);
    self.checkedISO = ko.observable(false);
    self.checkedOther = ko.observable(false);
    self.ISONum = ko.observable("");
    self.OtherAccredit = ko.observable("");
    self.checkedHA.subscribe(function() {
        if(self.hospitalAccredits.indexOf('HA') < 0) {
            self.hospitalAccredits.push('HA');
        } else {
            self.hospitalAccredits.remove('HA');
        }
        console.log(self.hospitalAccredits());
    });
    self.checkedHAHP.subscribe(function() {
        if(self.hospitalAccredits.indexOf('HAHP') < 0) {
            self.hospitalAccredits.push('HAHP');
        } else {
            self.hospitalAccredits.remove('HAHP');
        }
        console.log(self.hospitalAccredits());
    });
    self.hcare1_1 = ko.observable("");
    self.hcare1_1_cmnt = ko.observable("");
    self.hcare1_2 = ko.observable("");
    self.hcare1_2_cmnt = ko.observable("");
    self.hcare1_3 = ko.observable("");
    self.hcare1_3_cmnt = ko.observable("");
    self.hcare1_4 = ko.observable("");
    self.hcare1_4_cmnt = ko.observable("");
    self.hcare1_5 = ko.observable("");
    self.hcare1_5_cmnt = ko.observable("");
    self.hcare1_6 = ko.observable("");
    self.hcare1_6_cmnt = ko.observable("");
    self.hcare1_7 = ko.observable("");
    self.hcare1_7_cmnt = ko.observable("");
    self.hcare1_8 = ko.observable("");
    self.hcare1_8_cmnt = ko.observable("");
    self.hcare1_9 = ko.observable("");
    self.hcare1_9_cmnt = ko.observable("");
    self.hcare1_10 = ko.observable("");
    self.hcare1_10_cmnt = ko.observable("");
    self.hcare1_11 = ko.observable("");
    self.hcare1_11_cmnt = ko.observable("");

    self.hcare2_1 = ko.observable("");
    self.hcare2_1_cmnt = ko.observable("");
    self.hcare2_2 = ko.observable("");
    self.hcare2_2_cmnt = ko.observable("");
    self.hcare2_3 = ko.observable("");
    self.hcare2_3_cmnt = ko.observable("");
    self.hcare2_4 = ko.observable("");
    self.hcare2_4_cmnt = ko.observable("");

    self.hcare3_1_1 = ko.observable("");
    self.hcare3_1_1_cmnt = ko.observable("");
    self.hcare3_1_2 = ko.observable("");
    self.hcare3_1_2_cmnt = ko.observable("");
    self.hcare3_1_3 = ko.observable("");
    self.hcare3_1_3_cmnt = ko.observable("");
    self.hcare3_2_1 = ko.observable("");
    self.hcare3_2_1_cmnt = ko.observable("");
    self.hcare3_2_2 = ko.observable("");
    self.hcare3_2_2_cmnt = ko.observable("");
    self.hcare3_2_3 = ko.observable("");
    self.hcare3_2_3_cmnt = ko.observable("");
    self.hcare3_3_1 = ko.observable("");
    self.hcare3_3_1_cmnt = ko.observable("");
    self.hcare3_3_2 = ko.observable("");
    self.hcare3_3_2_cmnt = ko.observable("");
    self.hcare3_3_3 = ko.observable("");
    self.hcare3_3_3_cmnt = ko.observable("");

    self.hcare4_1_1 = ko.observable("");
    self.hcare4_1_1_cmnt = ko.observable("");
    self.hcare4_1_2 = ko.observable("");
    self.hcare4_1_2_cmnt = ko.observable("");
    self.hcare4_1_3 = ko.observable("");
    self.hcare4_1_3_cmnt = ko.observable("");
    self.hcare4_2_1 = ko.observable("");
    self.hcare4_2_1_cmnt = ko.observable("");
    self.hcare4_2_2 = ko.observable("");
    self.hcare4_2_2_cmnt = ko.observable("");

    self.hcare4_3 = ko.observable("");
    self.hcare4_3_cmnt = ko.observable("");
    self.hcare4_4 = ko.observable("");
    self.hcare4_4_cmnt = ko.observable("");

    self.bal1 = ko.observable("");
    self.bal2 = ko.observable("");
    self.bal3 = ko.observable("");
    self.bal4 = ko.observable("");
    self.bal5 = ko.observable("");
    self.bal6 = ko.observable("");
    self.bal7 = ko.observable("");
    self.bal8 = ko.observable("");
    self.bal9 = ko.observable("");
    self.bal10 = ko.observable("");
    self.balScore = ko.computed(function() {
        if(self.bal1() !== "" && self.bal2() !== "" && self.bal3() !== ""
            && self.bal4() !== "" && self.bal5() !== "" && self.bal6() !== ""
            && self.bal7() !== "" && self.bal8() !== "" && self.bal9() !== ""
            && self.bal10() !== "") {
                var score = +(self.bal1()) + +(self.bal2()) + +(self.bal3());
                score = score + +(self.bal4()) + +(self.bal5()) + +(self.bal6());
                score = score + +(self.bal7()) + +(self.bal8()) + +(self.bal9()) + +(self.bal10());
                return score;
        } else {
            return -1;
        }
    });
    self.tgds1 = ko.observable("");
    self.tgds2 = ko.observable("");
    self.tgds3 = ko.observable("");
    self.tgds4 = ko.observable("");
    self.tgds5 = ko.observable("");
    self.tgds6 = ko.observable("");
    self.tgds7 = ko.observable("");
    self.tgds8 = ko.observable("");
    self.tgds9 = ko.observable("");
    self.tgds10 = ko.observable("");
    self.tgds11 = ko.observable("");
    self.tgds12 = ko.observable("");
    self.tgds13 = ko.observable("");
    self.tgds14 = ko.observable("");
    self.tgds15 = ko.observable("");
    self.tgdsScore = ko.computed(function() {
        if(self.tgds1() !== "" && self.tgds2() !== "" && self.tgds3() !== ""
            && self.tgds4() !== "" && self.tgds5() !== "" && self.tgds6() !== ""
            && self.tgds7() !== "" && self.tgds8() !== "" && self.tgds9() !== ""
            && self.tgds10() !== "" && self.tgds11() !== "" && self.tgds12() !== ""
            && self.tgds13() !== "" && self.tgds14() !== "" && self.tgds15() !== "") {
                var score = +(self.tgds1()) + +(self.tgds2()) + +(self.tgds3());
                score = score + +(self.tgds4()) + +(self.tgds5()) + +(self.tgds6());
                score = score + +(self.tgds7()) + +(self.tgds8()) + +(self.tgds9()) + +(self.tgds10());
                score = score + +(self.tgds11()) + +(self.tgds12()) + +(self.tgds13()) + +(self.tgds14()) + +(self.tgds15());
                return score;
        } else {
            return -1;
        }
    });
    self.mmse1_1_chk = ko.observable("");
    self.mmse1_1_cmnt = ko.observable("");
    self.mmse1_2_chk = ko.observable("");
    self.mmse1_2_cmnt = ko.observable("");
    self.mmse1_3_chk = ko.observable("");
    self.mmse1_3_cmnt = ko.observable("");
    self.mmse1_4_chk = ko.observable("");
    self.mmse1_4_cmnt = ko.observable("");
    self.mmse1_5_chk = ko.observable("");
    self.mmse1_5_cmnt = ko.observable("");
    self.mmse2_1_1_chk = ko.observable("");
    self.mmse2_1_1_cmnt = ko.observable("");
    self.mmse2_1_2_chk = ko.observable("");
    self.mmse2_1_2_cmnt = ko.observable("");
    self.mmse2_1_3_chk = ko.observable("");
    self.mmse2_1_3_cmnt = ko.observable("");
    self.mmse2_1_4_chk = ko.observable("");
    self.mmse2_1_4_cmnt = ko.observable("");
    self.mmse2_1_5_chk = ko.observable("");
    self.mmse2_1_5_cmnt = ko.observable("");
    self.mmse2_2_1_chk = ko.observable("");
    self.mmse2_2_1_cmnt = ko.observable("");
    self.mmse2_2_2_chk = ko.observable("");
    self.mmse2_2_2_cmnt = ko.observable("");
    self.mmse2_2_3_chk = ko.observable("");
    self.mmse2_2_3_cmnt = ko.observable("");
    self.mmse2_2_4_chk = ko.observable("");
    self.mmse2_2_4_cmnt = ko.observable("");
    self.mmse2_2_5_chk = ko.observable("");
    self.mmse2_2_5_cmnt = ko.observable("");

    self.reg1_1 = ko.observable("");
    self.reg1_2 = ko.observable("");
    self.reg1_3 = ko.observable("");
    self.reg2_1 = ko.observable("");
    self.reg2_2 = ko.observable("");
    self.reg2_3 = ko.observable("");
    self.recall1_1 = ko.observable("");
    self.recall1_2 = ko.observable("");
    self.recall1_3 = ko.observable("");
    self.recall2_1 = ko.observable("");
    self.recall2_2 = ko.observable("");
    self.recall2_3 = ko.observable("");

    self.mmse4_1_chk = ko.observable("");
    self.mmse4_1_cmnt = ko.observable("");
    self.mmse4_2_chk = ko.observable("");
    self.mmse4_2_cmnt = ko.observable("");
    self.mmse6_1_chk = ko.observable("");
    self.mmse6_1_cmnt = ko.observable("");
    self.mmse6_2_chk = ko.observable("");
    self.mmse6_2_cmnt = ko.observable("");
    self.mmse7_chk = ko.observable("");
    self.mmse7_cmnt = ko.observable("");

    self.mmse8_1_chk = ko.observable("");
    self.mmse8_2_chk = ko.observable("");
    self.mmse8_3_chk = ko.observable("");
    self.mmse8_4_chk = ko.observable("");
    self.mmse8_cmnt = ko.observable("");
    self.mmse9_chk = ko.observable("");
    self.mmse10_chk = ko.observable("");
    self.mmse11_chk = ko.observable("");

    self.mna_weight = ko.observable("");
    self.mna_height = ko.observable("");
    self.mna_date = ko.observable("");
    self.bmi = ko.computed(function() {
        var bmi = +(self.mna_weight()) / (Math.pow(+(self.mna_height())/100.0, 2))
        return bmi.toFixed(2);
    });
    self.mna_1 = ko.observable("");
    self.mna_2 = ko.observable("");
    self.mna_3 = ko.observable("");
    self.mna_4 = ko.observable("");
    self.mna_5 = ko.observable("");
    self.mnaScore = ko.computed(function() {
        if(self.mna_1() !== "" && self.mna_2() !== ""
            && self.mna_3() !== "" && self.mna_4() !== ""
            && self.mna_5() !== "") {
                return +(self.mna_1()) + +(self.mna_2()) + +(self.mna_3())
                    + +(self.mna_4()) + +(self.mna_5());
        } else {
            return "Not enough data.";
        }
    });
    self.env_1 = ko.observable("");
    self.env_2 = ko.observable("");
    self.env_3 = ko.observable("");
    self.env_4 = ko.observable("");
    self.env_5 = ko.observable("");
    self.env_6 = ko.observable("");
    self.env_7 = ko.observable("");
    self.env_8 = ko.observable("");
    self.env_9 = ko.observable("");
    self.env_10 = ko.observable("");
    self.env_11 = ko.observable("");
    self.env_12 = ko.observable("");

    self.envScore = ko.computed(function() {
        if(self.env_1() !== "" && self.env_2() !== "" && self.env_3() !== ""
            && self.env_4() !== "" && self.env_5() !== "" && self.env_6() !== ""
            && self.env_7() !== "" && self.env_8() !== "" && self.env_9() !== ""
            && self.env_10() !== "" && self.env_11() !== "" && self.env_12() !== "")
        {
                var score = +(self.env_1()) + +(self.env_2()) + +(self.env_3());
                score = score + +(self.env_4()) + +(self.env_5()) + +(self.env_6());
                score = score + +(self.env_7()) + +(self.env_8()) + +(self.env_9()) + +(self.env_10());
                score = score + +(self.env_11()) + +(self.env_12());
                return score;
        } else {
            return "Not enough data.";
        }
    });
}

var vm = new viewModel();
ko.applyBindings(vm);