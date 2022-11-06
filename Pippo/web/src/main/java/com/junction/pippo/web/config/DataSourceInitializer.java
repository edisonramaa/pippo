package com.junction.pippo.web.config;

import com.junction.pippo.web.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;


/**
 * DataSourceInitializer populates the database with some
 * initial data for GlobalSetting using a JPA repository.
 * <p>
 * This component is started only when db.init property is set to true
 */
@Component
@ConditionalOnProperty(name = "db.init", havingValue = "true")

public class DataSourceInitializer implements CommandLineRunner {
    @Autowired
    private IUserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
    }

    private void init() {
            System.out.println("-----------------Data Source for GlobalSetting Initialized----------------------");
    }

}
