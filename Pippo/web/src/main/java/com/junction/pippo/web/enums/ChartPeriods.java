package com.junction.pippo.web.enums;

import lombok.Getter;

@Getter
public enum ChartPeriods {
    MONTHLY("monthly"),
    HOURLY("hourly"),
    DAILY("daily");


    private String chartPeriod;

    ChartPeriods(String chartPeriod) {
        this.chartPeriod = chartPeriod;
    }


}
