package org.babyfish.jimmer.sql.example.repository;

import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.example.model.BookStore;

public interface BookStoreRepository extends JRepository<BookStore, Long> {
}
