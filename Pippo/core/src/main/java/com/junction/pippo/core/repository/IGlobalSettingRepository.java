package com.junction.pippo.core.repository;


import com.junction.pippo.core.model.GlobalSettingEntity;

/**

 */
public interface IGlobalSettingRepository extends ICrudRepository<GlobalSettingEntity, Long> {
    void clearAllExistingRecords();

}
