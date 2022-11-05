package com.junction.pippo.core.repository.impl;


import com.junction.pippo.core.model.SequenceEntity;
import com.junction.pippo.core.repository.ISequenceRepository;
import org.springframework.stereotype.Repository;

/**

 */
@Repository
public class SequenceRepositoryImpl extends CrudRepositoryImpl<SequenceEntity, Long> implements ISequenceRepository {
    public SequenceRepositoryImpl() {
        super(SequenceEntity.class);
    }


    @Override
    public SequenceEntity getByName(String name) {
//        QSequenceEntity qsequenceEntity = QSequenceEntity.sequenceEntity;
//        JPAQueryFactory jpaQueryFactory = new JPAQueryFactory(entityManager);
//        SequenceEntity sequenceEntity = jpaQueryFactory
//                .selectFrom(qsequenceEntity)
//                .where(qsequenceEntity.sequenceName.toLowerCase().eq(name.toLowerCase()))
//                .fetchOne();
//        return sequenceEntity;
        return null;
    }
}
