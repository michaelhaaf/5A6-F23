/**
 * You can edit, run, and share this code. All rights relinquished by the author -- use this code
 * however you please.
 *
 * Author: Michael Haaf
 */

/**
 * Hit the "> Run" button to see the console output of this example. Check the "println()"
 * statements at the bottom. Does the output make sense? Play around with this code until it does.
 *
 * The goal of this program is to show one possible way to make productive use of lambdas in Kotlin.
 *
 * Here we have a simple Calculator class with two instantiations:
 * - integerCalc: operates on Integers
 * - decimalCalc: operates on Decimals
 *
 * Think about how you would create this behavior in OOP languages like Java/C#. What is different
 * here?
 *
 * Some highlights:
 * - The "Number" interface comes from Java. (see the Java Docs for more info)
 * - Both the "sum" property and the "details" class method are functions, but one is a property and
 *   ones is a class method. See if you can figure out why I chose to implement the class this way
 *   (it demonstrates a good general principle for the different purposes of lambdas vs traditional
 *   functions) -
 */
class Calculator(
    val make: String,
    val model: String,
    val sum: (Number, Number) -> Number,
) {
  fun details(): String {
    return "Make: $make\nModel: $model"
  }
}

fun main() {
  val integerCalculator =
      Calculator(
          make = "IntegerCalc",
          model = "IntegerModel",
          sum = { x: Number, y: Number -> x.toInt() + y.toInt() })

  val decimalCalculator =
      Calculator(
          make = "DecimalCalc",
          model = "DecimalModel",
          sum = { x: Number, y: Number -> x.toDouble() + y.toDouble() })

  println(integerCalculator.details())
  println(integerCalculator.sum(12, 7))
  println(integerCalculator.sum(12.13, 7.04))

  println(decimalCalculator.details())
  println(decimalCalculator.sum(12, 7))
  println(decimalCalculator.sum(12.13, 7.04))
}
