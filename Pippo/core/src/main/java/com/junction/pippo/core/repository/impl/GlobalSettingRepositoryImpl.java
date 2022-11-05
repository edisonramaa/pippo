package com.junction.pippo.core.repository.impl;

import com.junction.pippo.core.model.GlobalSettingEntity;
import com.junction.pippo.core.repository.IGlobalSettingRepository;
import org.springframework.stereotype.Repository;

@Repository
public class GlobalSettingRepositoryImpl extends CrudRepositoryImpl<GlobalSettingEntity, Long> implements IGlobalSettingRepository {
    public GlobalSettingRepositoryImpl() {
        super(GlobalSettingEntity.class);
    }


    @Override
    public void clearAllExistingRecords() {
        String tableName = this.classType.getSimpleName();
        entityManager.createQuery("DELETE FROM " + tableName + " t ");
    }
}
