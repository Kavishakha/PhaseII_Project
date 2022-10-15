package StepDefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith (Cucumber.class)

@CucumberOptions(
		
		monochrome = true,
		
		//plugin is used to generate html report
		plugin = {"pretty","html:target/html-cucumber","json:target/cucumber.json"},
		
		//path for the feature files
		features = "src/test/java/Features",
		
		//path for the step definitions
		glue = "StepDefs",
		
		// Tags to be specified in feature file
		tags = {"@Tag1"}
		
		)
public class Runner_PhaseII {

}
