package com.junction.pippo.core.service.impl;


import com.junction.pippo.core.model.GlobalSettingEntity;
import com.junction.pippo.core.repository.IGlobalSettingRepository;
import com.junction.pippo.core.service.IGlobalSettingService;
import org.springframework.stereotype.Service;


@Service
public class GlobalSettingServiceImpl extends CrudServiceImpl<GlobalSettingEntity, Long> implements IGlobalSettingService {

    public GlobalSettingServiceImpl(IGlobalSettingRepository storageRepository) {
        super(storageRepository);

    }


}
