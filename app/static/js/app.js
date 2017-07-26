var viewModel = function() {
    var self = this;
    self.hsuQuery = ko.observable("");
    self.hsuList = ko.observableArray([]);
    self.filteredHsuList = ko.observableArray([]);
    self.hsuSelected = ko.observable(false);
    self.searchHsu = function (query) {
        if(query === '') {
            self.filteredHsuList([]);  // if query is empty, reset the list
            // self.currpage(0);
        } else {
            self.filteredHsuList([]);
            $.each(self.hsuList(), function(idx, h) {
                if(h.unit_fullname.toLowerCase().indexOf(query.toLowerCase()) > -1 ) {
                    self.filteredHsuList.push(h);
                }
            });
            // self.currpage(0);
        }
    };
    self.hospitalId = ko.observable();
    self.hospitalName = ko.observable("");
    self.hospitalStreetAddr = ko.observable("");
    self.hospitalRoad = ko.observable("");
    self.hospitalDistrict = ko.observable("");
    self.hospitalSubDistrict = ko.observable("");
    self.hospitalProvince = ko.observable("");
    self.hospitalZipcode = ko.observable("");
    self.hospitalTel = ko.observable("");
    self.hospitalEmail = ko.observable("");
    self.hospitalServicePlan = ko.observable("");
    self.hospitalNumBed = ko.observable("");
    self.hospitalSurveyDate = ko.observable("");
    self.hospitalAssessor = ko.observable("");
    self.hospitalAssessorPosition = ko.observable("");
    self.hospitalAssessorTel = ko.observable("");
    self.hospitalAssessorEmail = ko.observable("");
    self.hospitalAccredits = ko.observableArray([]);
    self.hospitalAreaId = ko.observable();
    self.hospitalRegion = ko.observable();
    self.healthServiceAreaId = ko.observable();
    self.selectHsu = function(hsu) {
        self.hsuSelected(true);
        self.hospitalId(hsu['unit_id_short']);
        self.hospitalName(hsu['unit_fullname']);
        self.hospitalDistrict(hsu['district_name']);
        self.hospitalSubDistrict(hsu['subdistrict_name']);
        self.hospitalProvince(hsu['province_name']);
        self.hospitalAreaId(hsu['area_id']);
        self.healthServiceAreaId(hsu['hs_area_id']);
        self.hospitalNumBed(hsu['num_bed']);
        self.hospitalRegion(hsu['region']);
        self.hospitalServicePlan(hsu['unit_service_plan']);
        self.filteredHsuList([hsu]);
    }
    self.clearHsuSearch = function() {
        self.hsuQuery("");
        self.hsuSelected(false);
    };
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
    self.hcare1_1_1 = ko.observable("");
    self.hcare1_1_1_cmnt = ko.observable("");
    self.hcare1_1_2 = ko.observable("");
    self.hcare1_1_2_cmnt = ko.observable("");
    self.hcare1_1_3 = ko.observable("");
    self.hcare1_1_3_cmnt = ko.observable("");

    self.hcare1_2_1 = ko.observable("");
    self.hcare1_2_1_cmnt = ko.observable("");
    self.hcare1_2_2 = ko.observable("");
    self.hcare1_2_2_cmnt = ko.observable("");
    self.hcare1_2_3 = ko.observable("");
    self.hcare1_2_3_cmnt = ko.observable("");
    self.hcare1_3 = ko.observable("");
    self.hcare1_3_cmnt = ko.observable("");
    self.hcare1_4_1 = ko.observable("");
    self.hcare1_4_1_cmnt = ko.observable("");
    self.hcare1_4_2 = ko.observable("");
    self.hcare1_4_2_cmnt = ko.observable("");
    self.hcare1_4_3 = ko.observable("");
    self.hcare1_4_3_cmnt = ko.observable("");
    self.hcare1_5_1 = ko.observable("");
    self.hcare1_5_1_cmnt = ko.observable("");
    self.hcare1_5_2 = ko.observable("");
    self.hcare1_5_2_cmnt = ko.observable("");
    self.hcare1_5_3 = ko.observable("");
    self.hcare1_5_3_cmnt = ko.observable("");
    self.hcare1_6 = ko.observable("");
    self.hcare1_6_cmnt = ko.observable("");
    self.hcare1_7_1 = ko.observable("");
    self.hcare1_7_1_cmnt = ko.observable("");
    self.hcare1_7_2 = ko.observable("");
    self.hcare1_7_2_cmnt = ko.observable("");
    self.hcare1_7_3 = ko.observable("");
    self.hcare1_7_3_cmnt = ko.observable("");
    self.hcare1_7_4 = ko.observable("");
    self.hcare1_7_4_cmnt = ko.observable("");
    self.hcare1_8_1 = ko.observable("");
    self.hcare1_8_1_cmnt = ko.observable("");
    self.hcare1_8_2 = ko.observable("");
    self.hcare1_8_2_cmnt = ko.observable("");
    self.hcare1_8_3 = ko.observable("");
    self.hcare1_8_3_cmnt = ko.observable("");
    self.hcare1_9 = ko.observable("");
    self.hcare1_9_cmnt = ko.observable("");
    self.hcare1_10_1 = ko.observable("");
    self.hcare1_10_1_cmnt = ko.observable("");
    self.hcare1_10_2 = ko.observable("");
    self.hcare1_10_2_cmnt = ko.observable("");
    self.hcare1_10_3 = ko.observable("");
    self.hcare1_10_3_cmnt = ko.observable("");
    self.hcare1_11_1 = ko.observable("");
    self.hcare1_11_1_cmnt = ko.observable("");
    self.hcare1_11_2 = ko.observable("");
    self.hcare1_11_2_cmnt = ko.observable("");
    self.hcare1_12 = ko.observable("");
    self.hcare1_12_cmnt = ko.observable("");
    self.hcare1_13 = ko.observable("");
    self.hcare1_13_cmnt = ko.observable("");
    self.hcare1_14_1 = ko.observable("");
    self.hcare1_14_1_cmnt = ko.observable("");
    self.hcare1_14_2 = ko.observable("");
    self.hcare1_14_2_cmnt = ko.observable("");
    self.hcare1_14_3 = ko.observable("");
    self.hcare1_14_3_cmnt = ko.observable("");
    self.hcare1_14_4 = ko.observable("");
    self.hcare1_14_4_cmnt = ko.observable("");
    self.hcare1_14_5 = ko.observable("");
    self.hcare1_14_5_cmnt = ko.observable("");
    self.hcare1_14_6 = ko.observable("");
    self.hcare1_14_6_cmnt = ko.observable("");
    self.hcare1_14_7 = ko.observable("");
    self.hcare1_14_7_cmnt = ko.observable("");
    self.hcare1_14_8 = ko.observable("");
    self.hcare1_14_8_cmnt = ko.observable("");
    self.hcare1_14_9 = ko.observable("");
    self.hcare1_14_9_cmnt = ko.observable("");
    self.hcare1_15_1 = ko.observable("");
    self.hcare1_15_1_cmnt = ko.observable("");
    self.hcare1_15_2 = ko.observable("");
    self.hcare1_15_2_cmnt = ko.observable("");
    self.hcare1_15_3 = ko.observable("");
    self.hcare1_15_3_cmnt = ko.observable("");
    self.hcare1_15_4_1 = ko.observable("");
    self.hcare1_15_4_2 = ko.observable("");
    self.hcare1_15_4_3 = ko.observable("");
    self.hcare1_15_4_4 = ko.observable("");
    self.hcare1_15_4_5 = ko.observable("");
    self.hcare1_15_4_6 = ko.observable("");
    self.hcare1_15_4_7 = ko.observable("");
    self.hcare1_15_4_cmnt = ko.observable("");
    self.hcare1_15_5_1 = ko.observable("");
    self.hcare1_15_5_2 = ko.observable("");
    self.hcare1_15_5_3 = ko.observable("");
    self.hcare1_15_5_4 = ko.observable("");
    self.hcare1_15_5_cmnt = ko.observable("");
    self.hcare1_15_6 = ko.observable("");
    self.hcare1_15_6_cmnt = ko.observable("");
    self.hcare1_15_7 = ko.observable("");
    self.hcare1_15_7_cmnt = ko.observable("");

    self.hcare2_1_1 = ko.observable("");
    self.hcare2_1_1_cmnt = ko.observable("");
    self.hcare2_1_2 = ko.observable("");
    self.hcare2_1_2_cmnt = ko.observable("");
    self.hcare2_1_3 = ko.observable("");
    self.hcare2_1_3_cmnt = ko.observable("");
    self.hcare2_1_4 = ko.observable("");
    self.hcare2_1_4_cmnt = ko.observable("");
    self.hcare2_2_1 = ko.observable("");
    self.hcare2_2_1_cmnt = ko.observable("");
    self.hcare2_2_2 = ko.observable("");
    self.hcare2_2_2_cmnt = ko.observable("");
    self.hcare2_3_1 = ko.observable("");
    self.hcare2_3_1_cmnt = ko.observable("");
    self.hcare2_3_2 = ko.observable("");
    self.hcare2_3_2_cmnt = ko.observable("");
    self.hcare2_4_1 = ko.observable("");
    self.hcare2_4_1_cmnt = ko.observable("");
    self.hcare2_4_2 = ko.observable("");
    self.hcare2_4_2_cmnt = ko.observable("");
    self.hcare2_4_3 = ko.observable("");
    self.hcare2_4_3_cmnt = ko.observable("");
    self.hcare2_4_4 = ko.observable("");
    self.hcare2_4_4_cmnt = ko.observable("");
    self.hcare2_4_5 = ko.observable("");
    self.hcare2_4_5_cmnt = ko.observable("");
    self.hcare2_4_6 = ko.observable("");
    self.hcare2_4_6_cmnt = ko.observable("");

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
    self.hcare3_3_4 = ko.observable("");
    self.hcare3_3_4_cmnt = ko.observable("");
    self.hcare3_3_5 = ko.observable("");
    self.hcare3_3_5_other = ko.observable("");
    self.hcare3_3_5_cmnt = ko.observable("");
    self.hcare3_3_6 = ko.observable("");
    self.hcare3_3_6_other = ko.observable("");
    self.hcare3_3_6_cmnt = ko.observable("");

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

    self.hcare5_1 = ko.observable("");
    self.hcare5_1_cmnt = ko.observable("");
    self.hcare5_2 = ko.observable("");
    self.hcare5_2_cmnt = ko.observable("");

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
    self.tgds16 = ko.observable("");
    self.tgds17 = ko.observable("");
    self.tgds18 = ko.observable("");
    self.tgds19 = ko.observable("");
    self.tgds20 = ko.observable("");
    self.tgds21 = ko.observable("");
    self.tgds22 = ko.observable("");
    self.tgds23 = ko.observable("");
    self.tgds24 = ko.observable("");
    self.tgds25 = ko.observable("");
    self.tgds26 = ko.observable("");
    self.tgds27 = ko.observable("");
    self.tgds28 = ko.observable("");
    self.tgds29 = ko.observable("");
    self.tgds30 = ko.observable("");
    self.tgdsScore = ko.computed(function() {
        if(self.tgds1() !== "" && self.tgds2() !== "" && self.tgds3() !== ""
            && self.tgds4() !== "" && self.tgds5() !== "" && self.tgds6() !== ""
            && self.tgds7() !== "" && self.tgds8() !== "" && self.tgds9() !== ""
            && self.tgds10() !== "" && self.tgds11() !== "" && self.tgds12() !== ""
            && self.tgds13() !== "" && self.tgds14() !== "" && self.tgds15() !== ""
            && self.tgds16() !== "" && self.tgds17() !== "" && self.tgds18() !== ""
            && self.tgds19() !== "" && self.tgds20() !== "" && self.tgds21() !== ""
            && self.tgds22() !== "" && self.tgds23() !== "" && self.tgds24() !== ""
            && self.tgds25() !== "" && self.tgds26() !== "" && self.tgds27() !== ""
            && self.tgds28() !== "" && self.tgds29() !== "" && self.tgds30() !== ""
            ) {
                var score = +(self.tgds1()) + +(self.tgds2()) + +(self.tgds3());
                score = score + +(self.tgds4()) + +(self.tgds5()) + +(self.tgds6());
                score = score + +(self.tgds7()) + +(self.tgds8()) + +(self.tgds9()) + +(self.tgds10());
                score = score + +(self.tgds11()) + +(self.tgds12()) + +(self.tgds13()) + +(self.tgds14()) + +(self.tgds15());
                score = score + +(self.tgds16()) + +(self.tgds17()) + +(self.tgds18()) + +(self.tgds19()) + +(self.tgds20());
                score = score + +(self.tgds21()) + +(self.tgds22()) + +(self.tgds23()) + +(self.tgds24()) + +(self.tgds25());
                score = score + +(self.tgds26()) + +(self.tgds27()) + +(self.tgds28()) + +(self.tgds29()) + +(self.tgds30());
                return score;
        } else {
            return -1;
        }
    });
    self.tgdsInterpret = ko.computed(function() {
        var res = "";
        if (self.tgdsScore() < 0) {
            return "ยังสรุปผลไม่ได้ (Uninterpretable)";
        } else if (self.tgdsScore() >= 0 && self.tgdsScore() <= 12) {
            return "ปกติ (Normal)";
        } else if (self.tgdsScore() >= 13 && self.tgdsScore() <= 18) {
            return "มีความเศร้าเล็กน้อย (Mild depression)";
        } else {
            return "มีความเศร้ารุนแรง (Severe)";
        }
    })
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
            return "ยังไม่สามารถคิดคะแนนได้";
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
    self.env_13 = ko.observable("");
    self.env_14 = ko.observable("");
    self.env_15 = ko.observable("");
    self.env_16 = ko.observable("");
    self.env_17 = ko.observable("");
    self.env_18 = ko.observable("");
    self.env_19 = ko.observable("");
    self.env_20 = ko.observable("");

    self.envScore = ko.computed(function() {
        if(self.env_1() !== "" && self.env_2() !== "" && self.env_3() !== ""
            && self.env_4() !== "" && self.env_5() !== "" && self.env_6() !== ""
            && self.env_7() !== "" && self.env_8() !== "" && self.env_9() !== ""
            && self.env_10() !== "" && self.env_11() !== "" && self.env_12() !== ""
            && self.env_13() !== "" && self.env_14() !== "" && self.env_15() !== ""
            && self.env_16() !== "" && self.env_17() !== "" && self.env_18() !== ""
            && self.env_19() !== "" && self.env_20() !== "")
        {
                var score = +(self.env_1()) + +(self.env_2()) + +(self.env_3());
                score = score + +(self.env_4()) + +(self.env_5()) + +(self.env_6());
                score = score + +(self.env_7()) + +(self.env_8()) + +(self.env_9()) + +(self.env_10());
                score = score + +(self.env_11()) + +(self.env_12()) + +(self.env_13());
                score = score + +(self.env_14()) + +(self.env_15()) + +(self.env_16());
                score = score + +(self.env_17()) + +(self.env_18()) + +(self.env_19()) + +(self.env_20());
                return score;
        } else {
            return "ยังไม่สามารถคิดคะแนนได้";
        }
    });
    self.pntFirstName = ko.observable("");
    self.pntLastName = ko.observable("");
    self.pntAge = ko.observable("");
    self.pntHN = ko.observable("");
    self.pntGender = ko.observable("");
    self.pntNumKids = ko.observable("0");
    self.pntNumGrndChilds = ko.observable("0");
    self.checkedPntMother = ko.observable(false);
    self.checkedPntFather = ko.observable(false);
    self.checkedPntSpouse = ko.observable(false);
    self.pntNumFamilyMember = ko.computed(function() {
        var totalNum = 0;
        if(self.checkedPntFather() === true) {
            totalNum += 1;
        }
        if(self.checkedPntMother() === true) {
            totalNum += 1;
        }
        if(self.checkedPntSpouse() === true) {
            totalNum += 1;
        }
        totalNum += +(self.pntNumKids());
        totalNum += +(self.pntNumGrndChilds());
        return totalNum;
    });
    self.toggleAnalogScale1 = function() {
        $("#analogScale1").modal("open");
    };
    self.toggleAnalogScale2 = function() {
        $("#analogScale2").modal("open");
    };
    self.admitPainScale = function(level) {
        self.pntAdmittedWithPainDeg(level);
        $("#analogScale1").modal("close");
    };
    self.dischargePainScale = function(level) {
        self.pntDischargedWithPainDeg(level);
        $("#analogScale2").modal("close");
    };
    self.pntMaritalStatus = ko.observable("0");
    self.pntHouse = ko.observable("0");
    self.pntHouseStory = ko.observable("");
    self.pntHouse.subscribe(function(newValue) {
        if(newValue !== '2') {
            self.pntHouseOtherDetl("");
        }
    });
    self.pntHouseOtherDetl = ko.observable("");
    self.pntThaiLit = ko.observable("0");
    self.pntDiagnosis = ko.observable("");
    self.pntAdmittedDate = ko.observable("");
    self.pntDischargedDate = ko.observable("");
    self.pntEduLvl = ko.observable("");
    self.pntEduLvl.subscribe(function(newValue) {
        if(newValue !== '5') {
            self.pntEduLvl5Detl("");
        }
    });
    self.pntEduLvl5Detl = ko.observable("");
    self.pntJob = ko.observable("");
    self.pntJob.subscribe(function(newValue) {
        if(newValue !== '4') {
            self.pntJobOther("");
        }
    });
    self.pntJobOther = ko.observable("");
    self.pntIncome = ko.observable("");
    self.pntHealthProblemDiabetes = ko.observable("");
    self.pntHealthProblemHypertension = ko.observable("");
    self.pntHealthProblemHyperlipidemia = ko.observable("");
    self.pntHealthProblemHeart = ko.observable("");
    self.pntHealthProblemHeart.subscribe(function(newValue) {
        if(newValue === "") {
            self.pntHealthProblemHeartDetl("");
        }
    });
    self.pntHealthProblemHeartDetl = ko.observable("");
    self.pntHealthProblemArthritis = ko.observable("");
    self.pntHealthProblemArthritisDetl = ko.observable("");
    self.pntHealthProblemArthritis.subscribe(function(newValue) {
        if(newValue === "") {
            self.pntHealthProblemArthritisDetl("");
        }
    });
    self.pntHealthProblemParalysis = ko.observable("");
    self.pntHealthProblemHemo = ko.observable("");
    self.pntHealthProblemRenal = ko.observable("");
    self.pntHealthProblemAsthma = ko.observable("");
    self.pntHealthProblemUrine = ko.observable("");
    self.pntHealthProblemMemory = ko.observable("");
    self.pntHealthProblemFatigue = ko.observable("");
    self.pntHealthProblemInsomnia = ko.observable("");
    self.pntHealthProblemSwollenFeet = ko.observable("");
    self.pntHealthProblemCancer = ko.observable("");
    self.pntHealthProblemCancer.subscribe(function(newValue) {
        if(newValue === "") {
            self.pntHealthProblemCancerDetl("");
        }
    });
    self.pntHealthProblemCancerDetl = ko.observable("");
    self.pntHealthProblemOperation = ko.observable("");
    self.pntHealthProblemOperationDetl = ko.observable("");
    self.pntHealthProblemOperation.subscribe(function(newValue) {
        if(newValue === "") {
            self.pntHealthProblemOperationDetl("");
        }
    });
    self.pntHealthProblemOperation.subscribe(function(newValue) {
        if(newValue === "") {
            self.pntHealthProblemOperationDate("");
        }
    });
    self.pntHealthProblemOperationDetlDate = ko.observable("");
    self.pntDentalHealthProblem = ko.observable("");
    self.pntDentalPain = ko.observable(false);
    self.pntDentalBleeding = ko.observable(false);
    self.pntDentalWound = ko.observable(false);
    self.pntTeeth = ko.observable("");
    self.pntChewing = ko.observable("");
    self.pntLastAdmittedDis = ko.observable("");
    self.pntLastAdmittedDis.subscribe(function(newValue) {
        if(newValue === "") {
            self.pntLastAdmittedDate("");
        }
    });
    self.pntLastAdmittedDate = ko.observable("");
    self.pntBoneFracture = ko.observable(false);
    self.pntBoneFracture.subscribe(function(newValue) {
        if(newValue === false) {
            self.pntBoneFractureDate(""); // clear bone fracture date
            self.pntBoneFractureCause("");
            self.pntBoneFractureCauseDetl("");
        }
    });
    self.pntBoneFractureDate = ko.observable("");
    self.pntBoneFractureCause = ko.observable("");
    self.pntBoneFractureCause.subscribe(function(newValue) {
        if(newValue==="1") {
            self.pntBoneFractureCauseDetl("");
        }
    });
    self.pntBoneFractureCauseDetl = ko.observable("");
    self.pntBoneFractureLoc = ko.observable("");
    self.pntBoneFractureLocDetl = ko.observable("");
    self.pntXRayFracture = ko.observable("");
    self.pntHaveGlasses = ko.observable("");
    self.pntHaveHearingAid = ko.observable("");
    self.pntHaveCane = ko.observable("");
    self.pntHaveDenture = ko.observable("");
    self.pntHaveWalkingFr = ko.observable("");
    self.pntHaveUrineCatheter = ko.observable("");
    self.pntHaveWheelChair = ko.observable("");
    self.pntEyeSightNear = ko.observable("");
    self.pntEyeSightFar = ko.observable("");
    self.pntHearing = ko.observable("");
    self.pntRecvOtherMed = ko.observable("");
    self.pntRecvCalcium = ko.observable("");
    self.pntRecvVitamin = ko.observable("");
    self.pntRecvHerbalDrug = ko.observable("");
    self.pntRecvPsychoDrug = ko.observable("");
    self.pntRecvAspirin = ko.observable("");
    self.pntRecvNSAID = ko.observable("");
    self.pntRecvHeartDrug = ko.observable("");
    self.pntRecvAntihyperlipidemia = ko.observable("");
    self.pntRecvAntihypertension = ko.observable("");
    self.pntRecvAntidiabetes = ko.observable("");
    self.pntRecvAnticholinergics = ko.observable("");
    self.pntRecvAntibiotics = ko.observable("");

    self.pntAdmittedWithPain = ko.observable(false);
    self.pntAdmittedWithPainLoc = ko.observable("");
    self.pntAdmittedWithPainDeg = ko.observable("");
    self.pntAdmittedWithDelirium = ko.observable(false);
    self.pntAdmittedWithChoking = ko.observable(false);
    self.pntAdmittedWithDisuria = ko.observable(false);
    self.pntAdmittedWithFatigue = ko.observable(false);
    self.pntAdmittedWithInsomnia = ko.observable(false);
    self.pntAdmittedWithSwollenFeet = ko.observable(false);
    self.pntAdmittedWithConstipation = ko.observable(false);
    self.pntAdmittedWithOtherCondition = ko.observable("");
    
    self.pntDischargedWithPain = ko.observable(false);
    self.pntDischargedWithPainLoc = ko.observable("");
    self.pntDischargedWithPainDeg = ko.observable("");
    self.pntDischargedWithDelirium = ko.observable(false);
    self.pntDischargedWithChoking = ko.observable(false);
    self.pntDischargedWithDisuria = ko.observable(false);
    self.pntDischargedWithFatigue = ko.observable(false);
    self.pntDischargedWithInsomnia = ko.observable(false);
    self.pntDischargedWithSwollenFeet = ko.observable(false);
    self.pntDischargedWithConstipation = ko.observable(false);
    self.pntDischargedWithOtherCondition = ko.observable("");
    self.pntDischargedWithDeath = ko.observable(false);

    self.pntAdmittedWithADLLevel = ko.observable("");
    self.pntDischargedWithADLLevel = ko.observable("");

    self.pntAdmittedBodyWeight = ko.observable("");
    self.pntDischargedBodyWeight = ko.observable("");

    self.pntPainScore = ko.observable();

    self.painAssessor = function(level) {
        self.pntPainScore(level);
    }

    self.lab1_1 = ko.observable("");
    self.lab1_2 = ko.observable("");
    self.lab1_3 = ko.observable("");
    self.lab2_1 = ko.observable("");
    self.lab2_2 = ko.observable("");
    self.lab2_3 = ko.observable("");
    self.lab3_1 = ko.observable("");
    self.lab3_2 = ko.observable("");
    self.lab3_3 = ko.observable("");
    self.lab4_1 = ko.observable("");
    self.lab4_2 = ko.observable("");
    self.lab4_3 = ko.observable("");
    self.lab5_1 = ko.observable("");
    self.lab5_2 = ko.observable("");
    self.lab5_3 = ko.observable("");
    self.lab6_1 = ko.observable("");
    self.lab6_2 = ko.observable("");
    self.lab6_3 = ko.observable("");
    self.lab7_1 = ko.observable("");
    self.lab7_2 = ko.observable("");
    self.lab7_3 = ko.observable("");
    self.lab8_1 = ko.observable("");
    self.lab8_2 = ko.observable("");
    self.lab8_3 = ko.observable("");
    self.lab9_1 = ko.observable("");
    self.lab9_2 = ko.observable("");
    self.lab9_3 = ko.observable("");
    self.lab10_1 = ko.observable("");
    self.lab10_2 = ko.observable("");
    self.lab10_3 = ko.observable("");
    self.lab11_1 = ko.observable("");
    self.lab11_2 = ko.observable("");
    self.lab11_3 = ko.observable("");
    self.lab12_1 = ko.observable("");
    self.lab12_2 = ko.observable("");
    self.lab12_3 = ko.observable("");
    self.lab13_1 = ko.observable("");
    self.lab13_2 = ko.observable("");
    self.lab13_3 = ko.observable("");
    self.lab14_1 = ko.observable("");
    self.lab14_2 = ko.observable("");
    self.lab14_3 = ko.observable("");
    self.lab15_1 = ko.observable("");
    self.lab15_2 = ko.observable("");
    self.lab15_3 = ko.observable("");
    self.lab16_1 = ko.observable("");
    self.lab16_2 = ko.observable("");
    self.lab16_3 = ko.observable("");
    self.lab17_1 = ko.observable("");
    self.lab17_2 = ko.observable("");
    self.lab17_3 = ko.observable("");
    self.lab18_1 = ko.observable("");
    self.lab18_2 = ko.observable("");
    self.lab18_3 = ko.observable("");
    self.lab19_1 = ko.observable("");
    self.lab19_2 = ko.observable("");
    self.lab19_3 = ko.observable("");
    self.lab20_1 = ko.observable("");
    self.lab20_2 = ko.observable("");
    self.lab20_3 = ko.observable("");
    self.lab21_1 = ko.observable("");
    self.lab21_2 = ko.observable("");
    self.lab21_3 = ko.observable("");
}

var vm = new viewModel();
var getHsuList = $.getJSON('/api/v1/hsu/')
$.when(getHsuList).done(function(results) {
    $.each(results["data"], function(ix, hsu){
        vm.hsuList.push(hsu);
    });
});
var submitResults = function() {
    var data = ko.toJS(vm);
    // remove some unused data
    delete data['hsuList'];
    delete data['hsuQuery'];
    delete data['filteredHsuList'];
    delete data['hsuSelected'];
    delete data['tgdsInterpret'];
    delete data['mnaScore'];
    delete data['envScore'];
    $.ajax({
        url: '/api/v1/results/',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        dataType: 'json'
    }).done(function() {
        console.log(data)
    });
}

ko.applyBindings(vm);
vm.hsuQuery.subscribe(vm.searchHsu);