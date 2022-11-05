package com.junction.pippo.web.model;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
public class VisitorData {
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private int visits;
    private String locationName;
    private String lat;
    private String lng;
}
