''' Creates and populates a heatlhcare unit database from the excel file'''

import sys
import pandas as pd
from mongoengine import *

connect('hsudb')

class HealthCareUnit(Document):
    hs_area_id = IntField()  # health service area ID
    area_id = IntField()
    unit_id_long = StringField()
    unit_id_short = IntField()
    unit_type = StringField()
    unit_fullname = StringField()
    unit_service_plan = StringField()
    num_bed = IntField()
    province_id = IntField()
    province_name = StringField()
    district_id = IntField()
    district_name = StringField()
    subdistrict_id = IntField()
    subdistrict_name = StringField()
    region = StringField()


def load_data(row):
    hsu = HealthCareUnit(
        hs_area_id=int(row[0]),
        area_id=int(row[1]),
        unit_id_short=row[3],
        unit_fullname=row[5],
        unit_type=row[6],
        unit_service_plan=row[7],
        num_bed=int(row[8]),
        province_id=int(row[9]),
        province_name=row[10],
        district_id=int(row[11]),
        district_name=row[12],
        subdistrict_id=int(row[13]),
        subdistrict_name=row[14],
        region=row[15]
    )
    hsu.save()


if __name__=='__main__':
    if len(sys.argv) < 2:
        print('Data file and sheetname are not specified.')
        raise SystemExit

    df = pd.read_excel(sys.argv[1], sheetname=int(sys.argv[2]))
    for ix, row in df.iterrows():
        load_data(row)