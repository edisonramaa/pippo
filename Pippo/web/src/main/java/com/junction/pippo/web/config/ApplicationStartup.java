package com.junction.pippo.web.config;

import com.junction.pippo.core.model.GlobalSettingEntity;
import com.junction.pippo.core.service.IGlobalSettingService;
import com.junction.pippo.core.utils.GlobalSettingUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**

 */

@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {
    private final IGlobalSettingService globalSettingService;


    @Autowired
    public ApplicationStartup(IGlobalSettingService globalSettingService) {
        this.globalSettingService = globalSettingService;
    }

    /**
     * This event is executed as late as possible to indicate that
     * the application is ready to run startup service requests.
     */
    @Override
    public void onApplicationEvent(final ApplicationReadyEvent applicationReadyEvent) {
        List<GlobalSettingEntity> globalSettingEntities = globalSettingService.findAll();
        Map<String, String> globalSettingMap = new HashMap();
        globalSettingEntities.forEach(globalSettingEntity -> {
            globalSettingMap.put(globalSettingEntity.getName(), globalSettingEntity.getSettingValue());
            GlobalSettingUtils.setGlobalSettingMap(globalSettingMap);
        });

        System.out.println("Global Settings: " + globalSettingMap);
    }
}
