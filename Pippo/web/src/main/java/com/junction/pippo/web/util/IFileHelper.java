package com.junction.pippo.web.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

public interface IFileHelper {
    /**
     * This method is used to read the csv file regarding park's visitors data.
     *
     * @return file
     */
    File getVisitorsData() throws IOException;
}
