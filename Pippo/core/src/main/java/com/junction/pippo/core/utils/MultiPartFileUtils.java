package com.junction.pippo.core.utils;

import com.junction.pippo.core.exception.PippoException;
import com.junction.pippo.core.model.FileInfoModel;
import org.apache.commons.io.IOUtils;

import java.io.*;
import java.nio.file.*;
import java.util.List;

/**

 */
public class MultiPartFileUtils {

    public static String getRootLocation() {
        String rootPath = GlobalSettingUtils.getGlobalSettingByKey(GlobalSettingUtils.ROOT_UPLOAD_LOCATION);
        String imaagePath = GlobalSettingUtils.getGlobalSettingByKey(GlobalSettingUtils.IMAGE_UPLOAD_LOCATION);
        String finalFilePath = rootPath + File.separator + imaagePath;
        return finalFilePath;
    }

    public static String writeFile(List<FileInfoModel> fileInfoModels) {

        for (FileInfoModel fileInfoModel : fileInfoModels) {
            writeFile(fileInfoModel);
        }
        return null;
    }

    private static String bulkMoveFile(List<FileInfoModel> fileInfoModels) {
        for (FileInfoModel fileInfoModel : fileInfoModels) {
            moveFile(fileInfoModel);
        }
        return null;
    }


    public static String moveFile(FileInfoModel fileSource) {
        String sourceFileLocation = fileSource.getRootLocation() + File.separator + fileSource.getFolderName();
        String sourceFileLocationPath = getNewFileName(fileSource);
        Path movefrom = Paths.get(sourceFileLocation + File.separator + sourceFileLocationPath);

        String destipipponLocation = fileSource.getDestipipponLocation() + File.separator + fileSource.getFolderName();
        String destipipponLocationPath = getNewFileName(fileSource);
        File destipipponFile = new File(destipipponLocation);
        if (!destipipponFile.exists()) {
            destipipponFile.mkdirs();
        }
        Path target = Paths.get(destipipponLocation + File.separator + destipipponLocationPath);
        try {
            Files.move(movefrom, target, StandardCopyOption.REPLACE_EXISTING);
            return destipipponLocation + File.separator + destipipponLocationPath;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String getExtensionOfFile(String name) {
        String fileExtension = "";

        // If fileName domainObject not contain "." or starts with "." then it is not a valid file
        if (name.contains(".") && name.lastIndexOf(".") != 0) {
            fileExtension = name.substring(name.lastIndexOf(".") + 1);
        }


        return fileExtension;
    }


    /**
     * renames a file
     *
     * @param fileInfoModel
     * @param newName
     * @return
     */
    public static Boolean rename(FileInfoModel fileInfoModel, String newName) {
        String sourceFileLocation = fileInfoModel.getRootLocation() + File.separator + fileInfoModel.getFolderName();
        String sourceFileLocationPath = getNewFileName(fileInfoModel);
        String extension = getExtensionOfFile(fileInfoModel.getImage());
        String newFileName = newName + "." + extension;
        Path source = Paths.get(sourceFileLocation + File.separator + sourceFileLocationPath);

        try {
            Files.move(source, source.resolveSibling(newFileName));
            return true;
        } catch (NoSuchFileException noSuchFileException) {
            noSuchFileException.printStackTrace();
            throw new PippoException("There is no such file to rename.");
        } catch (IOException e) {
            e.printStackTrace();
            throw new PippoException("File IO Exception. Check Server Log");
        }

    }

    /**
     * deletes a file
     *
     * @param fileInfoModel
     * @return
     */
    public static String deleteFile(FileInfoModel fileInfoModel) {
        String sourceFileLocation = fileInfoModel.getRootLocation() + File.separator + fileInfoModel.getFolderName();
        String sourceFileLocationPath = getNewFileName(fileInfoModel);
        Path sourcePath = Paths.get(sourceFileLocation + File.separator + sourceFileLocationPath);
        try {
            Files.deleteIfExists(sourcePath);
            return "Deleted";
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }


    public static String writeFile(FileInfoModel fileInfoModel) {
        String folderFileLocation = fileInfoModel.getRootLocation() + File.separator + fileInfoModel.getFolderName();
        File file = new File(folderFileLocation);
        if (!file.exists()) {
            file.mkdirs();
        }
        String newFileName = getNewFileName(fileInfoModel);
        Path path = Paths.get(folderFileLocation + File.separator + newFileName);
        try {
            Files.write(path, fileInfoModel.getMultipartFile().getBytes());
            return fileInfoModel.getFolderName() + File.separator + newFileName;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * writes file to server and updates its name according the form data
     *
     * @param fileInfoModel
     * @param newName
     * @return
     */
    public static String writeandRenameFile(FileInfoModel fileInfoModel, String newName) {
        String folderFileLocation = fileInfoModel.getRootLocation() + fileInfoModel.getFolderName();
        File file = new File(folderFileLocation);
        if (!file.exists()) {
            file.mkdirs();
        }
        Path path = Paths.get(folderFileLocation + File.separator + newName);
        try {
            Files.write(path, fileInfoModel.getMultipartFile().getBytes());
            return fileInfoModel.getFolderName() + File.separator + newName;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    private static String getNewFileName(FileInfoModel fileInfoModel) {
        return (StringUtils.isNotNull(fileInfoModel.getImage()) ? fileInfoModel.getImage() : fileInfoModel.getMultipartFile().getOriginalFilename());
    }

    public static byte[] readFile(FileInfoModel fileInfoModel) {
        byte[] bytes = new byte[0];
        if (fileInfoModel.getImage() != null) {
            String file = fileInfoModel.getRootLocation() + File.separator + fileInfoModel.getImage();
            InputStream inputStream = null;
            try {
                File checkFile = new File(file);
                if (checkFile.exists()) {
                    inputStream = new FileInputStream(file);
                    return IOUtils.toByteArray(inputStream);
                }
                file = fileInfoModel.getRootLocation() + File.separator + "default";
                return defaultFile(file);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return bytes;
    }

    public static byte[] defaultFile(String file) {
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(file);
            return IOUtils.toByteArray(inputStream);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
