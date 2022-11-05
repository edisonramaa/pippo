package com.junction.pippo.core.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "global_setting")
public class GlobalSettingEntity extends EntityBase {
    @Column(name = "name")
    private String name;
    @Column(name = "setting_value")
    private String settingValue;

    public GlobalSettingEntity() {
    }

    public GlobalSettingEntity(String name, String settingValue) {
        this.name = name;
        this.settingValue = settingValue;
    }

}
