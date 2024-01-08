import Foundation

@objc public class navigationBar: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
