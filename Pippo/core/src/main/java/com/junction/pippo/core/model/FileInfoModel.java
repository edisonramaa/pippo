package com.junction.pippo.core.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

/**

 */
@Getter
@Setter
public class FileInfoModel extends ModelBase {

    private String folderName;

    private MultipartFile multipartFile;

    private String rootLocation;
    //name of file
    private String image;

    private String destipipponLocation;


    private FileInfoModel(FileInfoBuilder fileInfoBuilder) {
        this.folderName = fileInfoBuilder.folderName;

        this.multipartFile = fileInfoBuilder.multipartFile;

        this.rootLocation = fileInfoBuilder.rootLocation;

        this.image = fileInfoBuilder.image;

        this.destipipponLocation = fileInfoBuilder.destipipponLocation;
    }

    public static class FileInfoBuilder {
        private String folderName;

        private MultipartFile multipartFile;

        private String rootLocation;

        private String image;

        private String destipipponLocation;

        public FileInfoBuilder() {

        }

        public FileInfoBuilder folderName(String folderName) {
            this.folderName = folderName;
            return this;
        }

        public FileInfoBuilder multipartFile(MultipartFile multipartFile) {
            this.multipartFile = multipartFile;
            return this;
        }

        public FileInfoBuilder rootLocation(String rootLocation) {
            this.rootLocation = rootLocation;
            return this;
        }

        public FileInfoBuilder image(String image) {
            this.image = image;
            return this;
        }


        public FileInfoBuilder destipipponLocation(String destipipponLocation) {
            this.destipipponLocation = destipipponLocation;
            return this;
        }

        public FileInfoModel build() {
            return new FileInfoModel(this);
        }


    }
}
