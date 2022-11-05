package com.junction.pippo.web.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.junction.pippo.core.model.EntityBase;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "location")
public class LocationEntity extends EntityBase {
    @Column(name = "lat")
    private String lat;
    @Column(name = "lng")
    private String lng;
    @Column(name = "pointInfo")
    private String pointInfo;
    @Column(name = "name")
    private String name;
    @Column(name = "date")
    private Date date;
    @Column(name = "start_time")
    private Time startTime;
    @Column(name = "end_time")
    private Time endTime;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity userId;

}
