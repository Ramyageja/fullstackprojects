package com.example.fspSwiggy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*@SpringBootApplication-->@Configuration, @EnableAutoConfiguration and @ComponentScan annotations.
 *@EnableAutoConfiguration: enable Spring Boot’s auto-configuration mechanism
@ComponentScan: enable @Component scan on the package where the application is located
@Configuration: allow to register extra beans in the context or import additional configuration classes */

@SpringBootApplication
public class FspSwiggyApplication {

	public static void main(String[] args) {
		SpringApplication.run(FspSwiggyApplication.class, args);
		//System.out.println("Start");
	}

}
