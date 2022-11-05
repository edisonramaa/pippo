package com.junction.pippo.core.model;

import lombok.Getter;
import lombok.Setter;

/**

 */
@Getter
@Setter
public class ReferencedTableModel extends ModelBase {
    String tableName;
    String columnName;
}
