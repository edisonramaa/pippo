package com.junction.pippo.core.repository.impl;


import com.junction.pippo.core.repository.ICrudRepository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.List;

/**

 */
@Transactional
public class CrudRepositoryImpl<T, ID extends Serializable> implements ICrudRepository<T, ID> {

    @PersistenceContext
    protected EntityManager entityManager;
    protected String tableName;
    protected Class<T> classType;

    public CrudRepositoryImpl(Class<T> classType) {
        this.classType = classType;
        this.tableName = this.classType.getSimpleName();
    }

    @Override
    public <S extends T> S save(S entity) {
        entityManager.persist(entity);
        return entity;
    }

    @Override
    public <S extends T> S update(S entity) {
        entityManager.merge(entity);
        return entity;
    }

    @Transactional(readOnly = true)
    @Override
    public T findOne(ID id) {
        return entityManager.find(this.classType, id);
    }

    @Transactional(readOnly = true)
    @Override
    public boolean exists(ID id) {
        T entity = findOne(id);
        return (entity != null);
    }

    @Transactional(readOnly = true)
    @Override
    public List<T> findAll() {
//        String tableName = classType.getSimpleName();
        return entityManager.createQuery("SELECT t FROM " + tableName + " t")
                .getResultList();
    }

    @Transactional(readOnly = true)
    @Override
    public List<T> findAll(ID id) {
//        String tableName = classType.getSimpleName();
        return entityManager.createQuery("SELECT t FROM " + tableName + " t where t.id=:id  ORDER BY t.createdDate DESC")
                .setParameter("id", id)
                .getResultList();
    }


    @Transactional(readOnly = true)
    @Override
    public Long count() {
        String tableName = classType.getSimpleName();
        return (Long) entityManager.createQuery("SELECT COUNT(t) FROM " + tableName + " t ")
                .getSingleResult();
    }


    @Override
    public Long count(String sqlQuery) {
        return (Long) entityManager.createQuery(sqlQuery)
                .getSingleResult();
    }

    @Override
    public boolean delete(ID id) {
        T entity = findOne(id);
        return delete(entity);

    }


    @Override
    public boolean delete(T entity) {
        entityManager.remove(entityManager.contains(entity) ? entity : entityManager.merge(entity));
        return true;
    }


    @Override
    public String getTableName() {
        Table table = this.classType.getAnnotation(Table.class);
        return table.name();
    }
}
