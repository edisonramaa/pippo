package com.junction.pippo.core.model;

import lombok.Getter;
import lombok.Setter;

/**

 */
@Getter
@Setter
public class PageModel extends ModelBase {

    private Integer currentPage;
    private Long totalRecords;
    private Integer maxPages;

    public PageModel() {
    }

    public PageModel(Integer currentPage, Long totalRecords, Integer maxPages) {
        this.currentPage = currentPage;
        this.totalRecords = totalRecords;
        this.maxPages = maxPages;
    }


}
