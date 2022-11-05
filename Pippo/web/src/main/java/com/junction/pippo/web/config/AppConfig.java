package com.junction.pippo.web.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.web.client.RestTemplate;

import javax.persistence.PersistenceContext;
import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;


@Configuration
@EnableAutoConfiguration
@ComponentScan
public class AppConfig {

    @Value("${spring.datasource.username}")
    private String userName;
    @Value("${spring.datasource.password}")
    private String password;
    @Value("${spring.datasource.url}")
    private String url;
    @Value("${spring.datasource.driverClassName}")
    private String driverClassName;
    @Value("${spring.jpa.database-platform}")
    private String databasePlatform;

    @Bean
    @Primary
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource getDataSource() {

        DataSourceBuilder factory = DataSourceBuilder.create()
                .driverClassName(this.driverClassName)
                .username(this.userName)
                .password(this.password)
                .url(this.url);

        return factory.build();


//        PoolProperties poolProperties = new PoolProperties();
//        poolProperties.setUrl(this.url);
//        poolProperties.setUsername(this.userName);
//        poolProperties.setPassword(this.password);
//        poolProperties.setDriverClassName(this.driverClassName);
//
//        //Configuration for auto re-connect
//        poolProperties.setTestOnBorrow(true);
//        poolProperties.setTestWhileIdle(true);
//        poolProperties.setTimeBetweenEvictionRunsMillis(60000);
//        poolProperties.setValidationQuery("SELECT 1");
//        return new DataSource(poolProperties);
    }

    @PersistenceContext
    @Primary
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {

        LocalContainerEntityManagerFactoryBean localContainerEntityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();

        Map<String, Object> props = new HashMap<>();
        // props.put("hibernate.ejb.interceptor", new DbInterceptor());
        localContainerEntityManagerFactoryBean.setDataSource(getDataSource());
        localContainerEntityManagerFactoryBean.setJpaVendorAdapter(jpaVendorAdapter());
        localContainerEntityManagerFactoryBean.setPackagesToScan("com.junction.pippo");
        localContainerEntityManagerFactoryBean.setJpaPropertyMap(props);
        localContainerEntityManagerFactoryBean.setPersistenceUnitName("PippoPersistenceUnit");
        return localContainerEntityManagerFactoryBean;
    }

    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter hibernateJpaVendorAdapter = new HibernateJpaVendorAdapter();
        hibernateJpaVendorAdapter.setShowSql(true);
        //set to true to generate tables email Entity
        hibernateJpaVendorAdapter.setGenerateDdl(true);
        hibernateJpaVendorAdapter.setDatabasePlatform(this.databasePlatform);
        hibernateJpaVendorAdapter.setShowSql(true);
        return hibernateJpaVendorAdapter;
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }


}
